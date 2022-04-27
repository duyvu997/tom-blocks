import Header from './Header';
import Navbar from './Navbar';
import * as anchor from '@project-serum/anchor';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from '../pages/about/About';
import Mint from '../pages/mint/Mint';
import Collections from '../pages/collection/Collections';
import { clusterApiUrl } from '@solana/web3.js';
import { useMemo } from 'react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { getCandyMachineId } from './solana/candy-machine';
import {
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter,
  LedgerWalletAdapter,
  SolletWalletAdapter,
  SolletExtensionWalletAdapter,
} from '@solana/wallet-adapter-wallets';

const network =
  (process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork) ||
  WalletAdapterNetwork.Devnet;
const Layout = () => {
  const candyMachineId = getCandyMachineId();
  const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10);
  const txTimeoutInMilliseconds = 30000;
  const endpoint = useMemo(() => clusterApiUrl(network), []);
  const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  const connection = new anchor.web3.Connection(
    rpcHost ? rpcHost : anchor.web3.clusterApiUrl('devnet')
  );


  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SlopeWalletAdapter(),
      new SolflareWalletAdapter({ network }),
      new TorusWalletAdapter(),
      new LedgerWalletAdapter(),
      new SolletWalletAdapter({ network }),
      new SolletExtensionWalletAdapter({ network }),
    ],
    []
  );

  console.log(wallets)
  return (
    <div>
      <Header />
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Mint
                endpoint={endpoint}
                wallets={wallets}
                candyMachineId={candyMachineId}
                connection={connection}
                startDate={startDateSeed}
                txTimeout={txTimeoutInMilliseconds}
                rpcHost={rpcHost}
              />
            }
          />
          <Route path="/collections" element={<Collections />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Layout;

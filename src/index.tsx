import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import reportWebVitals from './reportWebVitals';
import './styles/output.css';
import './styles/input.css';
import { WalletDialogProvider } from '@solana/wallet-adapter-material-ui';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter,
  LedgerWalletAdapter,
  SolletWalletAdapter,
  SolletExtensionWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import { getCandyMachineId } from './components/solana/candy-machine';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import * as anchor from '@project-serum/anchor';

const network =
  (process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork) ||
  WalletAdapterNetwork.Devnet;
const candyMachineId = getCandyMachineId();
const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10);
const txTimeoutInMilliseconds = 30000;
const endpoint = clusterApiUrl(network) || ([] as any);
const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
// The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
const connection = new anchor.web3.Connection(
  rpcHost ? rpcHost : anchor.web3.clusterApiUrl('devnet')
);

const wallets = [
  new PhantomWalletAdapter(),
  new SlopeWalletAdapter(),
  new SolflareWalletAdapter({ network }),
  new TorusWalletAdapter(),
  new LedgerWalletAdapter(),
  new SolletWalletAdapter({ network }),
  new SolletExtensionWalletAdapter({ network }),
];

ReactDOM.render(
  <React.StrictMode>
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletDialogProvider>
          <Layout
            candyMachineId={candyMachineId}
            connection={connection}
            startDate={startDateSeed}
            txTimeout={txTimeoutInMilliseconds}
            rpcHost={rpcHost}
          />
        </WalletDialogProvider>
      </WalletProvider>
    </ConnectionProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

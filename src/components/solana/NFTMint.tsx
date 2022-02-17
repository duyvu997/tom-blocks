import Home from './Home';
import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import { WalletDialogProvider } from '@solana/wallet-adapter-material-ui';

const NFTMint = ({
  endpoint,
  wallets,
  candyMachineId,
  connection,
  startDateSeed,
  txTimeoutInMilliseconds,
  rpcHost,
}: any) => {
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletDialogProvider>
          <Home
            candyMachineId={candyMachineId}
            connection={connection}
            startDate={startDateSeed}
            txTimeout={txTimeoutInMilliseconds}
            rpcHost={rpcHost}
          />
        </WalletDialogProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default NFTMint;

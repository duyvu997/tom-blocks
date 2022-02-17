import './mint.css';
import React, { useState } from 'react';
import NFTMint from '../../components/solana/NFTMint';
import { useWallet } from '@solana/wallet-adapter-react';

const Mint = ({
  endpoint,
  wallets,
  candyMachineId,
  connection,
  startDateSeed,
  txTimeoutInMilliseconds,
  rpcHost,
}: any) => {
  const wallet = useWallet();
  const isConnected = useState(wallet.connected)
  return (
    <div className="mint-container">
      <div className="status">
        <div className="status-text">
          <div className={wallet.connected ? 'connected' : 'disconnected'}></div>
          <span className="wallet-address">
            {wallet.connected ? wallet.publicKey : 'Not Connected'}
          </span>
        </div>
        <div className="wallet-balance"> 10.0 SOL</div>
      </div>
      <div className="media-content"></div>
      <div className="description">
        <h3>Gen 0</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui nam
          mollitia provident blanditiis tenetur tempore fugiat labore, totam
          quod? Autem quam reiciendis blanditiis eaque odio molestias natus
          sapiente. Deserunt, laboriosam.
        </p>
      </div>
      <div className="mint-btn">
        <NFTMint
          endpoint={endpoint}
          wallets={wallets}
          candyMachineId={candyMachineId}
          connection={connection}
          startDate={startDateSeed}
          txTimeout={txTimeoutInMilliseconds}
          rpcHost={rpcHost}
        ></NFTMint>
      </div>
    </div>
  );
};

export default Mint;


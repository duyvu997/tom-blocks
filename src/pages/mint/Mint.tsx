import './mint.css';
import NFTMint from '../../components/solana/NFTMint';
import { useWallet } from '@solana/wallet-adapter-react';
import {
  getBalance,
  shortenAddress,
} from '../../components/solana/candy-machine';
import { useEffect, useState } from 'react';

const Mint = ({
  candyMachineId,
  connection,
  startDateSeed,
  txTimeoutInMilliseconds,
  rpcHost,
}: any) => {
  const [balance, setBalance] = useState(0);
  const wallet = useWallet() as any;

  useEffect(() => {
    const fetchData = async () => {
      if (wallet.publicKey?.toString() && connection) {
        const balance = await getBalance(wallet, connection);
        setBalance(balance / 10 ** 9);
      }
    };

    fetchData().catch(console.error);
  }, [connection, wallet]);

  return (
    <div className="mint-container">
      <div className="status">
        <div className="status-text">
          <div
            className={wallet.connected ? 'connected' : 'disconnected'}
          ></div>
          <span className="wallet-address">
            {wallet.connected
              ? shortenAddress(wallet.publicKey?.toString() || '')
              : 'Not Connected'}
          </span>
        </div>
        <div className="wallet-balance">
          {process.env.REACT_APP_SOLANA_NETWORK} {balance} SOL
        </div>
      </div>
      <div className="media-content-wrapper">
        <img className="media-content" src="sele.gif" alt="" />
      </div>
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

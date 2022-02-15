import './mint.css';
import React from 'react';
import NFTMint from '../../components/solana/NFTMint';

const Mint = () => {
  return (
    <div className="mint-container">
      <div className="status">
        <div className="status-text">
          <div className="connected"></div>
          <span className="wallet-address"> Not Connected</span>
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
        <NFTMint></NFTMint>
      </div>
    </div>
  );
};

export default Mint;

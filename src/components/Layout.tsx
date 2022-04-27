import Header from './Header';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from '../pages/about/About';
import Mint from '../pages/mint/Mint';
import Collections from '../pages/collection/Collections';

const Layout = ({ candyMachineId, connection }: any) => {
  const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10);
  const txTimeoutInMilliseconds = 30000;
  const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;

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

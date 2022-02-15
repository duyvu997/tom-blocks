import Header from './Header';
import Navbar from './Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import About from '../pages/About';
import Mint from '../pages/mint/Mint';
import Collections from '../pages/Collections';

const Layout = () => {
  return (
    <div>
      <Header/>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Mint />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Layout;

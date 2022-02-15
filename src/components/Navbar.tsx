import { Link } from 'react-router-dom';

const navbarStyle = {
  justifyContent: 'center',
};

const Navbar = () => {
  return (
    <div className="navbar bg-base-100" style={navbarStyle}>
      <ul className="menu menu-horizontal p-0">
        <li>
          <Link to="/home">MINT</Link>
        </li>
        <li>
          <Link to="/collections">COLLECTIONS</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

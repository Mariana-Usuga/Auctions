import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/navBar.scss';

const NavBar = () => {
  const [show, setShow] = useState(false);

  const showMenu = () => (!show ? setShow(true) : setShow(false));

  return (
    <nav className="nav">
      <div className="nav__btn">
        <button type="button" className="nav__bars" onClick={showMenu}>
          {!show ? <FaBars /> : <FaTimes />}
        </button>
      </div>
      <ul
        className={!show ? 'nav__ul' : 'nav__ul--show background--show'}
      >
        <li className="nav__li">
          <Link to="/" className="nav__link">
            Home
          </Link>
        </li>
        <li className="nav__li">
          <Link to="/about" className="nav__link">
            About Page
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import github from '../img/github-icon.svg';
import logo from '../img/logo.svg';

const Navbar = ({ lang }) => {
  const base = `/${lang}`;

  return (
    <nav className="navbar is-transparent">
      <div className="container">
        <div className="navbar-brand">
          <Link to={base} className="navbar-item">
            <figure className="image">
              <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
            </figure>
          </Link>
        </div>
        <div className="navbar-start">
          <Link className="navbar-item" to={`${base}/about`}>
            About
          </Link>
          <Link className="navbar-item" to={`${base}/products`}>
            Products
          </Link>
          <Link className="navbar-item" to={`${base}/career`}>
            Career
          </Link>
        </div>
        <div className="navbar-end">
          <a
            className="navbar-item"
            href="https://github.com/oslomarketsolutions/website"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <img src={github} alt="Github" />
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  lang: PropTypes.string,
};

Navbar.defaultProps = {
  lang: 'no',
};

export default Navbar;

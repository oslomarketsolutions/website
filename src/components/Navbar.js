import React from 'react';
import Link from 'gatsby-link';

import github from '../img/github-icon.svg';
import logo from '../img/logo.svg';

const Navbar = ({ location }) => {
  const [_, lang] = /^\/(\w\w)/.exec(location.pathname);
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
        </div>
        <div className="navbar-end">
          <a
            className="navbar-item"
            href="https://github.com/AustinGreen/gatsby-netlify-cms-boilerplate"
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

export default Navbar;

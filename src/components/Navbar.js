import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import github from '../img/github-icon.svg';
import logo from '../img/logo_oms_hoved.png';

function changeLinkLang(lang) {
  const links = { about: 'About', work: 'Work', products: 'Products' };

  if (lang === 'no') {
    links.about = 'OM OSS';
    links.work = 'JOBB';
    links.products = 'PRODUKTER';
  }

  return links;
}

const Navbar = ({ lang }) => {
  const base = `/${lang}`;
  const link = changeLinkLang(lang);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to={base} className="navbar-item">
          <img src={logo} alt="Oms" />
        </Link>
      </div>
      <div className="navbar-links">
        <Link className="navbar-item" to={`${base}/products`}>
          {link.products}
        </Link>
        <Link className="navbar-item" to={`${base}/career`}>
          {link.work}
        </Link>
        <Link className="navbar-item" to={`${base}/about`}>
          {link.about}
        </Link>
        <a
          className="navbar-item last"
          href="https://github.com/oslomarketsolutions/website"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={github} alt="Github" />
          </span>
        </a>
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

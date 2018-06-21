import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import logo from '../../img/logo_oms_hoved.png';
import styles from './navbar.module.scss';

const changeLinkLanguage = language => {
  const links = { about: 'About us', work: 'Work', products: 'Products' };

  if (language === 'no') {
    links.about = 'Om oss';
    links.work = 'Jobb';
    links.products = 'Produkter';
  }

  return links;
};

const Navbar = ({ language }) => {
  const base = `/${language}`;
  const link = changeLinkLanguage(language);

  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link to={base}>
            <img src={logo} alt="Oms logo" />
          </Link>
        </li>
        <li>
          <Link to={`${base}/products`}>{link.products}</Link>
        </li>
        <li>
          <Link to={`${base}/career`}>{link.work}</Link>
        </li>
        <li>
          <Link to={`${base}/about`}>{link.about}</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  language: PropTypes.string,
};

Navbar.defaultProps = {
  language: 'no',
};

export default Navbar;

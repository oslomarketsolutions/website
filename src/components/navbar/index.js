import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import github from '../../img/github-icon.svg';
import logo from '../../img/logo_oms_hoved.png';
import styles from './navbar.module.scss';

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
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>
        <Link to={base}>
          <img src={logo} alt="Oms" />
        </Link>
      </div>
      <div className={styles.navbarLinks}>
        <Link to={`${base}/products`}>{link.products}</Link>
        <Link to={`${base}/career`}>{link.work}</Link>
        <Link to={`${base}/about`}>{link.about}</Link>
        <a
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

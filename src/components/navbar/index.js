import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

const changePageLanguage = (path, language) => {
  const pathSplitArray = path.split('/');
  let returnPath;

  if (language === 'en')
    if (pathSplitArray.length < 3) returnPath = 'no';
    else returnPath = `/no/${pathSplitArray[2]}`;
  else if (pathSplitArray.length < 3) returnPath = 'en';
  else returnPath = `/en/${pathSplitArray[2]}`;

  return returnPath;
};

const Navbar = ({ language, location }) => {
  const base = `/${language}`;
  const link = changeLinkLanguage(language);

  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link className={styles.noHover} to={base}>
            <img src={logo} alt="Oms logo" />
          </Link>
        </li>
        <li>
          <Link activeClassName={styles.active} to={`${base}/products`}>
            {link.products}
          </Link>
        </li>
        <li>
          <Link activeClassName={styles.active} to={`${base}/career`}>
            {link.work}
          </Link>
        </li>
        <li className={styles.doublePadding}>
          <Link activeClassName={styles.active} to={`${base}/about`}>
            {link.about}
          </Link>
        </li>
        <li className={`${styles.noPaddingRight} ${styles.borderLeft}`}>
          <a
            href="https://www.linkedin.com/company/oslo-market-solutions-as/"
            target="_blank"
            rel="noopener noreferrer"
            /* className={styles.noHover} */
          >
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </a>
        </li>
        <li className={styles.noPaddingRight}>
          <a
            href="https://www.facebook.com/oslomarketsolutions/"
            target="_blank"
            rel="noopener noreferrer"
            /* className={styles.noHover} */
          >
            <FontAwesomeIcon icon={['fab', 'facebook']} />
          </a>
        </li>
        <li className={styles.noPaddingRight}>
          <a
            href="https://medium.com/shark-bytes"
            target="_blank"
            rel="noopener noreferrer"
            /* className={styles.noHover} */
          >
            <FontAwesomeIcon icon={['fab', 'medium']} />
          </a>
        </li>
        <li className={styles.borderRight}>
          <a
            href="https://github.com/oslomarketsolutions/website"
            target="_blank"
            rel="noopener noreferrer"
            /* className={styles.noHover} */
          >
            <FontAwesomeIcon icon={['fab', 'github-square']} />
          </a>
        </li>
        <li className={styles.noPaddingRight}>
          <Link to={changePageLanguage(location.pathname, language)}>
            {/* <img src={language === 'no' ? no : en} alt="flag" /> */}
            <FontAwesomeIcon icon="globe" />
            {language === 'no' ? 'ENGLISH' : 'NORSK'}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  language: PropTypes.string,
  location: PropTypes.string,
};

Navbar.defaultProps = {
  language: 'no',
};

export default Navbar;

import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Link from 'gatsby-link';
import ScrollButton from '../scrollButton/index';
import '../../layouts/style.scss';
import styles from './footer.module.scss';

const Footer = ({ language }) => (
  <footer className={styles.footer}>
    <div className={styles.footerContainer}>
      <div className={styles.groupWebsites}>
        <h3>
          {language === 'en' ? 'Group websites' : 'Konsernets nettsteder'}
        </h3>
        <ul>
          <li>
            <a
              href="http://www.osloborsvps.no/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Oslo Børs VPS
            </a>
          </li>
          <li>
            <a
              href="https://www.vps.no/pub/"
              target="_blank"
              rel="noopener noreferrer"
            >
              VPS
            </a>
          </li>
          <li>
            <a
              href="https://www.oslobors.no/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Oslo Børs
            </a>
          </li>
          <li>
            <a
              href="http://fishpool.eu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fish Pool
            </a>
          </li>
          <li>
            <a
              href="https://centevo.se/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Centevo
            </a>
          </li>
          <li>
            <a
              href="https://newsweb.oslobors.no/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Newsweb
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.navigate}>
        <h3>{language === 'en' ? 'Navigate' : 'Navigasjon'}</h3>
        <ul>
          <li>
            <Link to={`/${language}`}>
              {language === 'en' ? 'Home' : 'Hjem'}
            </Link>
          </li>
          <li>
            <Link to={`/${language}/products`}>
              {language === 'en' ? 'Products' : 'Produkter'}
            </Link>
          </li>
          <li>
            <Link to={`/${language}/career`}>
              {language === 'en' ? 'Work' : 'Jobb'}
            </Link>
          </li>
          <li>
            <Link to={`/${language}/about`}>
              {language === 'en' ? 'About us' : 'Om oss'}
            </Link>
          </li>
          <li>
            <ScrollButton scrollStepInPx="50" delayInMs="16.66" />
          </li>
        </ul>
      </div>
      <div className={styles.contact}>
        <h3>{language === 'en' ? 'Contact' : 'Kontakt'}</h3>
        <ul>
          <li>Oslo Market Solutions AS</li>
          <li>Fred Olsens gate 1, 0152 Oslo</li>
          <li>+47 40 00 23 13</li>
          <li>info@oms.no</li>
          <li>Postboks 1174 Sentrum, 0107 Oslo</li>
        </ul>
      </div>
      <div className={styles.socialMedia}>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/company/oslo-market-solutions-as/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={['fab', 'linkedin']}
                style={{ fontSize: '45px' }}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/oslomarketsolutions/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={['fab', 'facebook']}
                style={{ fontSize: '45px' }}
              />
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/shark-bytes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={['fab', 'medium']}
                style={{ fontSize: '45px' }}
              />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/oslomarketsolutions"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={['fab', 'github-square']}
                style={{ fontSize: '45px' }}
              />
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.copyright}>
        <FontAwesomeIcon
          icon={['far', 'copyright']}
          style={{ fontSize: '12px' }}
        />
        <p>2018 Oslo Market Solutions. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  language: PropTypes.shape({ pathname: {} }),
};

export default Footer;

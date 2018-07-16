import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Link from 'gatsby-link';
import ScrollButton from '../scrollButton/index';
import '../../layouts/style.scss';
import styles from './footer.module.scss';

const Footer = ({ language, data }) => {
  const { groupWebsites, contactInfo } = data.markdownRemark.frontmatter;

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.groupWebsites}>
          <h3>
            {language === 'en' ? 'Group websites' : 'Konsernets nettsteder'}
          </h3>
          <ul>
            <li>
              <a
                href={groupWebsites.website1.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {groupWebsites.website1.title}
              </a>
            </li>
            <li>
              <a
                href={groupWebsites.website2.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {groupWebsites.website2.title}
              </a>
            </li>
            <li>
              <a
                href={groupWebsites.website3.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {groupWebsites.website3.title}
              </a>
            </li>
            <li>
              <a
                href={groupWebsites.website4.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {groupWebsites.website4.title}
              </a>
            </li>
            <li>
              <a
                href={groupWebsites.website5.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {groupWebsites.website5.title}
              </a>
            </li>
            <li>
              <a
                href={groupWebsites.website6.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {groupWebsites.website6.title}
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
            <li>{contactInfo.title}</li>
            <li>{contactInfo.visitingAddress}</li>
            <li>{contactInfo.phoneNumber}</li>
            <li>{contactInfo.email}</li>
            <li>{contactInfo.mailAddress}</li>
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
                <FontAwesomeIcon icon={['fab', 'linkedin']} />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/oslomarketsolutions/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={['fab', 'facebook']} />
              </a>
            </li>
            <li>
              <a
                href="https://medium.com/shark-bytes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={['fab', 'medium']} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/oslomarketsolutions"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={['fab', 'github-square']} />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.copyright}>
          <FontAwesomeIcon icon={['far', 'copyright']} />
          <p>2018 Oslo Market Solutions. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  language: PropTypes.string,
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default Footer;

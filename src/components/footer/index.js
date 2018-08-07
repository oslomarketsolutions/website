import React from 'react';
import PropTypes from 'prop-types';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Link from 'gatsby-link';
import '../../layouts/style.scss';
import styles from './footer.module.scss';

const Footer = ({ language, data }) => {
  const { groupWebsites, contactInfo } = data.frontmatter;

  return (
    <footer className={styles.footer}>
      <div className={`bodyNormal ${styles.footerContainer}`}>
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
                {language === 'en' ? 'Services' : 'Produkter'}
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
              <Link to={`/${language}/responsibleDisclosure`}>
                {language === 'en'
                  ? 'Responsible Disclosure'
                  : 'Sårbarhetsrapportering'}
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.groupWebsites}>
          <h3>
            {language === 'en' ? 'Group websites' : 'Konsernets nettsteder'}
          </h3>
          <ul>
            <li>
              <OutboundLink
                href={groupWebsites.website1.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {groupWebsites.website1.title}
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                href={groupWebsites.website2.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {groupWebsites.website2.title}
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                href={groupWebsites.website3.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {groupWebsites.website3.title}
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                href={groupWebsites.website4.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {groupWebsites.website4.title}
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                href={groupWebsites.website5.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {groupWebsites.website5.title}
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                href={groupWebsites.website6.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {groupWebsites.website6.title}
              </OutboundLink>
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
              <OutboundLink
                href="https://www.linkedin.com/company/oslo-market-solutions-as/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={['fab', 'linkedin']} />
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                href="https://www.facebook.com/oslomarketsolutions/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={['fab', 'facebook']} />
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                href="https://medium.com/shark-bytes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={['fab', 'medium']} />
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                href="https://github.com/oslomarketsolutions"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={['fab', 'github-square']} />
              </OutboundLink>
            </li>
          </ul>
        </div>
        <div className={styles.bottom}>
          <div className={styles.copyright}>
            <FontAwesomeIcon icon={['far', 'copyright']} />
            <p className="bodySmall">
              2018 Oslo Market Solutions. All Rights Reserved.
            </p>
          </div>
          <div className={`bodySmall ${styles.licenses}`}>
            <Link to={`/${language}/licenses`}>Licenses</Link>
          </div>
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

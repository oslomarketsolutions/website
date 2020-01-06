import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { OutboundLink } from 'react-ga';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Link from 'gatsby-link';
import '../../layouts/style.scss';
import styles from './footer.module.scss';

const Footer = ({ language, data }) => {
  const { groupWebsites, contactInfo } = data.frontmatter;

  return (
    <footer className={styles.footer}>
      <div className={classNames('bodyNormal', styles.footerContainer)}>
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
                {language === 'en' ? 'Careers' : 'Jobb'}
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
                to={groupWebsites.website1.url}
                eventLabel={groupWebsites.website1.title}
                target="_blank"
                rel="noopener noreferrer"
              >
                {groupWebsites.website1.title}
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                to={groupWebsites.website2.url}
                eventLabel={groupWebsites.website2.title}
                target="_blank"
                rel="noopener noreferrer"
              >
                {groupWebsites.website2.title}
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                to={groupWebsites.website3.url}
                eventLabel={groupWebsites.website3.title}
                target="_blank"
                rel="noopener noreferrer"
              >
                {groupWebsites.website3.title}
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                to={groupWebsites.website4.url}
                eventLabel={groupWebsites.website4.title}
                target="_blank"
                rel="noopener noreferrer"
              >
                {groupWebsites.website4.title}
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                to={groupWebsites.website5.url}
                eventLabel={groupWebsites.website5.title}
                target="_blank"
                rel="noopener noreferrer"
              >
                {groupWebsites.website5.title}
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                to={groupWebsites.website6.url}
                eventLabel={groupWebsites.website6.title}
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
            <li>{contactInfo.visitingAddressNorway}</li>
            <li>{contactInfo.visitingAddressSweden}</li>
            <li>{contactInfo.phoneNumber}</li>
            <li>{contactInfo.email}</li>
            <li>{contactInfo.mailAddress}</li>
          </ul>
        </div>
        <div className={styles.socialMedia}>
          <ul>
            <li>
              <OutboundLink
                to="https://www.linkedin.com/company/oslo-market-solutions-as/"
                eventLabel="LinkedIn from footer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Link to our LinkedIn</span>
                <FontAwesomeIcon icon={['fab', 'linkedin']} />
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                to="https://www.facebook.com/oslomarketsolutions/"
                eventLabel="Facebook from footer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Link to our Facebook</span>
                <FontAwesomeIcon icon={['fab', 'facebook']} />
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                eventLabel="Instagram from homepage"
                to="https://www.instagram.com/oslomarketsolutions/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Link to our Instagram</span>
                <FontAwesomeIcon icon={['fab', 'instagram']} />
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                to="https://medium.com/shark-bytes"
                eventLabel="Shark Bytes Blog from footer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Link to our Medium blog</span>
                <FontAwesomeIcon icon={['fab', 'medium']} />
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                to="https://github.com/oslomarketsolutions"
                eventLabel="Github from footer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Link to our Github</span>
                <FontAwesomeIcon icon={['fab', 'github-square']} />
              </OutboundLink>
            </li>
          </ul>
        </div>
        <div className={styles.bottom}>
          <div className={styles.copyright}>
            <FontAwesomeIcon icon={['far', 'copyright']} />
            <p className="bodySmall">
              2020 Oslo Market Solutions. All Rights Reserved.
            </p>
          </div>
          <div className={classNames('bodySmall', styles.licenses)}>
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

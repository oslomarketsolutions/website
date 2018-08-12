import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'gatsby-link';
import styles from './linkCard.module.scss';

const LinkCard = ({ header, description, isDark, index }) => {
  let icon = '';

  /* const scrollTo = (duration) => {
    if(document != null) {
      const to = document.getElementById(header).offsetTop;
      const element = document.documentElement;
      const difference = to - element.scrollTop;
      const perTick = difference / duration * 10;

      setTimeout(() => {
          element.scrollTop += perTick;
          if (element.scrollTop === to) return;
          scrollTo(duration - 10);
      }, 10);
    }
  }; */

  switch (index) {
    case 1:
      icon = <FontAwesomeIcon icon={['fab', 'react']} />;
      break;
    case 2:
      icon = <FontAwesomeIcon icon={['fab', 'react']} />;
      break;
    case 3:
      icon = <FontAwesomeIcon icon={['fab', 'react']} />;
      break;
    case 4:
      icon = <FontAwesomeIcon icon={['fab', 'react']} />;
      break;
    default:
      icon = <FontAwesomeIcon icon={['fab', 'react']} />;
  }

  return (
    <div className={`${styles.linkCard} ${isDark ? styles.dark : ''}`}>
      <div className={styles.header}>
        <div className={styles.iconWrapper}>
          <div className={styles.icon}>{icon}</div>
        </div>
        <h3>{header}</h3>
      </div>
      <p>{description}</p>
      <Link className={`textButton ${styles.link}`} to={`#${header}`}>
        Go to {header}
      </Link>
      <Link className={`textButton ${styles.mobileLink}`} to={`#${header}`}>
        <div className={styles.iconWrapper}>
          <div className={styles.icon}>{icon}</div>
        </div>
        <h3>{header}</h3>
      </Link>
    </div>
  );
};

export default LinkCard;

LinkCard.propTypes = {
  header: PropTypes.string,
  description: PropTypes.string,
  isDark: PropTypes.bool,
  index: PropTypes.number,
};

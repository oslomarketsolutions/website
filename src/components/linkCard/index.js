import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'gatsby-link';
import styles from './linkCard.module.scss';

const LinkCard = ({ header, description, isDark, index, onClickFunction }) => {
  let icon = '';

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
    <Link
      className={`${styles.linkCard} ${isDark ? styles.dark : ''}`}
      to={`#${header}`}
      onClick={event => onClickFunction(event, header)}
    >
      <div className={styles.header}>
        <div className={styles.iconWrapper}>
          <div className={styles.icon}>{icon}</div>
        </div>
        <h3>{header}</h3>
      </div>
      <p>{description}</p>
      <Link
        className={`textButton ${styles.link}`}
        to={`#${header}`}
        onClick={event => onClickFunction(event, header)}
      >
        Go to {header}
      </Link>
      <Link
        className={`textButton ${styles.mobileLink}`}
        to={`#${header}`}
        onClick={event => onClickFunction(event, header)}
      >
        <div className={styles.iconWrapper}>
          <div className={styles.icon}>{icon}</div>
        </div>
        <h3 className="linkCardTitle">{header}</h3>
      </Link>
    </Link>
  );
};

export default LinkCard;

LinkCard.propTypes = {
  header: PropTypes.string,
  description: PropTypes.string,
  isDark: PropTypes.bool,
  index: PropTypes.number,
  onClickFunction: PropTypes.func,
};

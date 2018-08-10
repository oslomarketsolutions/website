import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './FeatureCard.module.scss';

const FeatureCard = ({ title, description, features, to, index, isDark }) => {
  let icon = '';
  let codeBranchIcon = false;

  switch (index) {
    case 1:
      icon = <FontAwesomeIcon icon={['fab', 'react']} />;
      break;
    case 2:
      icon = <FontAwesomeIcon icon={['fas', 'code-branch']} />;
      break;
    default:
      icon = '{...}';
  }

  if (icon !== '{...}' && icon.props.icon[1] === 'code-branch') {
    codeBranchIcon = true;
  }
  return (
    <div className={`${styles.featureCard} ${isDark ? styles.dark : ''}`}>
      <div className={styles.header}>
        <div className={styles.iconWrapper}>
          <div
            className={`${styles.icon} ${
              codeBranchIcon ? styles.codeBranchIcon : ''
            }`}
          >
            {icon}
          </div>
        </div>
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
      <ul className="bodySmall">
        {features &&
          features.map(feature => (
            <li key={feature}>
              <FontAwesomeIcon icon={['far', 'check-circle']} /> {feature}
            </li>
          ))}
      </ul>
      {/* Linken må få riktig 'to' fra props */}
      <Link className={`textButton ${styles.customizationLink}`} to={to}>
        Learn more <FontAwesomeIcon icon={['fas', 'arrow-right']} />
      </Link>
    </div>
  );
};

FeatureCard.propTypes = {
  title: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string,
  to: PropTypes.string,
  index: PropTypes.number,
  isDark: PropTypes.bool,
};

export default FeatureCard;

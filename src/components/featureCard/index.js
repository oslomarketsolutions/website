import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from 'gatsby-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './FeatureCard.module.scss';

const FeatureCard = ({
  title,
  description,
  features,
  to,
  icon,
  buttonText,
  isDark,
}) => (
  <Link
    to={to}
    className={classNames(styles.featureCard, {
      [styles.dark]: isDark,
    })}
  >
    <div className={styles.header}>
      <div className={styles.iconWrapper}>
        <div className={styles.icon}>
          <img src={icon} alt={title} />
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
    <div className={classNames('textButton', styles.customizationLink)}>
      {buttonText} <FontAwesomeIcon icon={['fas', 'arrow-right']} />
    </div>
  </Link>
);

FeatureCard.propTypes = {
  title: PropTypes.string,
  buttonText: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string,
  to: PropTypes.string,
  icon: PropTypes.string,
  isDark: PropTypes.bool,
};

export default FeatureCard;

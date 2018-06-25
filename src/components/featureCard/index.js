import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import styles from './FeatureCard.module.scss';

const FeatureCard = props => {
  // link should be the slug for whatever the featurecard is linking to
  const { title, description, resolutions, features, link = '' } = props;
  return (
    <Link to={link} className={styles.FeatureCard}>
      <section className={styles.image}>
        <Img resolutions={resolutions} />
      </section>
      <section className={styles.header}>
        <h3>{title}</h3>
      </section>
      <section className={styles.description}>
        <p>{description}</p>
      </section>
      <section className={styles.footer}>
        <ul>
          {features &&
            features.map(feature => <li key={feature}>{feature}</li>)}
        </ul>
      </section>
    </Link>
  );
};

FeatureCard.propTypes = {
  title: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string,
  link: PropTypes.string,
  resolutions: PropTypes.objectOf(
    PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  ),
};

export default FeatureCard;

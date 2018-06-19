import React from 'react';
import PropTypes from 'prop-types';
// import Link from 'gatsby-link';
import styles from './FeatureCard.module.scss';

const FeatureCard = props => {
  // link should be the slug for whatever the featurecard is linking to
  const { title, description, image, features } = props;
  return (
    <article className={styles.FeatureCard}>
      <section className={styles.image}>
        <img src={image} alt={title} />
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
            features.map(feature => {
              return <li>{feature}</li>;
            })}
        </ul>
      </section>
    </article>
  );
};

FeatureCard.propTypes = {
  title: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string,
  image: PropTypes.string,
};

export default FeatureCard;

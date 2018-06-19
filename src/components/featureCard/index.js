import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styles from './FeatureCard.module.scss';

const FeatureCard = props => {
  // link should be the slug for whatever the featurecard is linking to
  const { title, description, image, features, link } = props;
  return (
    <article className={styles.FeatureCard}>
      <section className={styles.image}>
        <img src={image} alt={title} />
      </section>
      <section className={styles.header}>
        <h2>{title}</h2>
        <h3>{features}</h3>
      </section>
      <section className={styles.description}>
        <p>{description}</p>
      </section>
      <Link to={link}>Les mer</Link>
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

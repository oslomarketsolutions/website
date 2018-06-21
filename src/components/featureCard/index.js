import React from 'react';
import PropTypes from 'prop-types';
import { navigateTo } from 'gatsby-link';
import styles from './FeatureCard.module.scss';

const FeatureCard = props => {
  // link should be the slug for whatever the featurecard is linking to
  const { title, description, image, features, link } = props;
  return (
    <article
      role="link"
      tabIndex="0"
      className={styles.FeatureCard}
      onClick={() => navigateTo(link)}
      onKeyDown={event => {
        if (event.key === 'Enter') navigateTo(link);
      }}
    >
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
              return <li key={feature}>{feature}</li>;
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
  link: PropTypes.string,
};

export default FeatureCard;

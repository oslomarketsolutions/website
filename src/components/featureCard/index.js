import React from 'react';
import PropTypes from 'prop-types';
import { navigateTo } from 'gatsby-link';
import styles from './FeatureCard.module.scss';

const FeatureCard = props => {
  const handleKeyDown = event => {
    console.log(event);
    console.log('Target', event.target);
    event.key === 'Enter' ? console.log('Enter') : console.log('Not Enter');
  };

  // link should be the slug for whatever the featurecard is linking to
  const { title, description, image, features, link } = props;
  return (
    <article
      tabIndex="0"
      className={styles.FeatureCard}
      onClick={() => navigateTo('/')}
      onKeyDown={e => {
        handleKeyDown(e);
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

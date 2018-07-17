import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styles from './FeatureCard.module.scss';
import ImageWrapper from '../imageWrapper';

const FeatureCard = props => {
  // link should be the slug for whatever the featurecard is linking to
  const { title, image, description, sizes, features, link = '' } = props;
  return (
    <Link to={link} className={styles.FeatureCard}>
      <ImageWrapper
        outerWrapperClassName={styles.imageContainer}
        sizes={sizes}
        src={image}
        alt={title}
      />
      <section className={styles.header}>
        <h4>{title}</h4>
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
  sizes: PropTypes.shape({
    aspectRatio: PropTypes.number,
    base64: PropTypes.string,
    sizes: PropTypes.string,
    src: PropTypes.string,
    srcSet: PropTypes.string,
  }),
  image: PropTypes.string,
};

export default FeatureCard;

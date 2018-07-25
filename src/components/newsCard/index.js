import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styles from './newsCard.module.scss';
import ImageWrapper from '../imageWrapper';

const NewsCard = ({ slug, title, description, image, sizes }) => (
  <Link to={slug} className={styles.newsCard}>
    {image && (
      <ImageWrapper
        src={image}
        outerWrapperClassName={styles.imageContainer}
        sizes={sizes}
        alt={title}
      />
    )}
    <div className={styles.textContainer}>
      <h3>{title}</h3>
      <p>
        This is just a placeholder description. Speaking of which, how should we
        handle it? Excerpt or own field?
      </p>
    </div>
  </Link>
);

export default NewsCard;

NewsCard.propTypes = {
  slug: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  sizes: PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number,
    base64: PropTypes.string,
    src: PropTypes.string,
    srcSet: PropTypes.string,
  }),
};

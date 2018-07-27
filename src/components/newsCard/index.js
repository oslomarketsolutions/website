import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styles from './newsCard.module.scss';
import ImageWrapper from '../imageWrapper';

const NewsCard = ({ slug, title, date, image, sizes, sticky }) => {
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const dateString = new Date(date).toLocaleDateString('no-NB', dateOptions);
  return (
    <Link to={slug} className={styles.newsCard}>
      {image && (
        <ImageWrapper
          src={image}
          outerWrapperClassName={styles.imageContainer}
          sizes={sizes}
          alt={title}
        />
      )}
      <div className={sticky ? styles.stickyMark : ''} />
      <div className={styles.overlay}>
        <div className={styles.textContainer}>
          <p className={styles.dateString}>{dateString}</p>
          <h3>{title}</h3>
          <p className={styles.description}>
            This is just a placeholder description. Speaking of which, how
            should we handle it? Excerpt or own field?
          </p>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;

NewsCard.propTypes = {
  slug: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  sizes: PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number,
    base64: PropTypes.string,
    src: PropTypes.string,
    srcSet: PropTypes.string,
  }),
  sticky: PropTypes.bool,
};

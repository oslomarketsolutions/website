import React from 'react';
import PropTypes from 'prop-types';
import styles from './linkCard.module.scss';
import ImageWrapper from '../imageWrapper';

const LinkCard = ({ product, onClickFunction, sticky, imageResolution }) => {
  const style = sticky ? styles.sticky : styles.notSticky;

  return (
    <button onClick={() => onClickFunction(product.title)} className={style}>
      <ImageWrapper
        src={product.image}
        outerWrapperClassName={styles.imageContainer}
        resolutions={imageResolution}
        alt={product.title}
      />
      <div className={styles.textContainer}>
        <h4>{product.title}</h4>
        <p>{product.description && product.description.slice(0, 140)}</p>
      </div>
    </button>
  );
};

export default LinkCard;

LinkCard.propTypes = {
  product: PropTypes.arrayOf(PropTypes.object),
  onClickFunction: PropTypes.func,
  sticky: PropTypes.bool,
  imageResolution: PropTypes.arrayOf(PropTypes.object),
};

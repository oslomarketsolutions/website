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
        style={{ height: '100%', width: '100%' }}
        resolutions={imageResolution}
      />
      <div className={styles.textContainer}>
        <h4>{product.title}</h4>
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

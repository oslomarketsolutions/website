import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styles from './linkCard.module.scss';
import { findImageResolution } from '../helperFunctions';

const LinkCard = ({ product, onClickFunction, sticky, imageResolutions }) => {
  const style = sticky ? styles.sticky : styles.notSticky;

  return (
    <button onClick={() => onClickFunction(product.title)} className={style}>
      <Img
        outerWrapperClassName={styles.imageContainer}
        style={{ height: '100%', width: '100%' }}
        sizes={findImageResolution(product.image, imageResolutions)}
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
  imageResolutions: PropTypes.arrayOf(PropTypes.object),
};

import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import {findImageSize} from '../helperFunctions';
import styles from './linkCard.module.scss';

const LinkCard = ({ product, onClickFunction, sticky, imageSizes }) => {
  const style = sticky ? styles.sticky : styles.notSticky;

  return (
    <button onClick={() => onClickFunction(product.title)} className={style}>
      {
        product.image &&
        <Img sizes={findImageSize(product.image, imageSizes)}/>
      }
      <div>
        <h4>{product.title}</h4>
        <p>{product.description.slice(0, 140)}</p>
      </div>
    </button>
  );
};

export default LinkCard;

LinkCard.propTypes = {
  product: PropTypes.arrayOf(PropTypes.object),
  onClickFunction: PropTypes.func,
  sticky: PropTypes.bool,
  imageSizes: PropTypes.arrayOf(PropTypes.object),
};

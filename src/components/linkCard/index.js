import React from 'react';
import PropTypes from 'prop-types';
import styles from './linkCard.module.scss';

const LinkCard = ({ product, onClickFunction }) => {
  const ting = 'ting';
  return (
    <button
      onClick={() => onClickFunction(product.title)}
      className={styles.linkCard}
    >
      <div className={styles.textContainer}>
        <h4>{product.title}</h4>
        <div>{ting}</div>
        <p>{product.description && product.description.slice(0, 140)}</p>
      </div>
    </button>
  );
};

export default LinkCard;

LinkCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    features: PropTypes.arrayOf(PropTypes.object),
  }),
  onClickFunction: PropTypes.func,
};

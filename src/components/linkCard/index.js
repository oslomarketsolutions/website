import React from 'react';
import PropTypes from 'prop-types';
import styles from './linkCard.module.scss';

const LinkCard = ({ product, onClickFunction, sticky }) => {
  const style = sticky ? styles.stickyCard : styles.notStickyCard;

  return (
    <button onClick={() => onClickFunction(product.title)} className={style}>
      <img src={product.image} alt={product.title} />
      <div>
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
};

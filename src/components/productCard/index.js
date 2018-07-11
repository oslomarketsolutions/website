import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductCard.module.scss';

const ProductCard = ({ product }) => (
  <div className={styles.ProductCard}>
    <section className={styles.header}>
      <h3>{product.title}</h3>
    </section>
    <section className={styles.description}>
      <p>{product.description}</p>
    </section>
    <section className={styles.image}>
      <img src={product.image} alt={product.title} />
    </section>
    <section className={styles.footer}>
      <ul>
        <li>test</li>
      </ul>
    </section>
  </div>
);

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
  }),
};

export default ProductCard;

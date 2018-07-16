import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import styles from './ProductCard.module.scss';

const ProductCard = ({ product, sizes }) => (
  <div className={styles.ProductCard}>
    <section className={styles.header}>
      <h3>{product.title}</h3>
    </section>
    <section className={styles.description}>
      <p>{product.description}</p>
    </section>
    <Img
      outerWrapperClassName={styles.imageContainer}
      style={{ height: '100%', width: '100%' }}
      sizes={sizes}
    />
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
  sizes: PropTypes.arrayOf(PropTypes.object),
};

export default ProductCard;

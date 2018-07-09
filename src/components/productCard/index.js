import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { findImageSize } from '../../components/helperFunctions';
import styles from './ProductCard.module.scss';

const ProductCard = ({ product, imageSizes }) => (
  <div className={styles.ProductCard}>
    <section className={styles.header}>
      <h3>{product.title}</h3>
    </section>
    <section className={styles.description}>
      <p>{product.description}</p>
    </section>
    <section className={styles.image}>
      {
        product.image &&
        <Img sizes={findImageSize(product.image, imageSizes)}/>
      }
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

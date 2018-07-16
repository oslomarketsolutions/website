import React from 'react';
import PropTypes from 'prop-types';
import { ProductPageTemplate } from '../../templates/productPage/index';

const ProductPagePreview = ({ entry, getAsset }) => {
  const features = [];
  entry.getIn(['data', 'investorPortal', 'features']).forEach(feature => {
    features.push({
      title: feature.getIn(['title']),
      description: feature.getIn(['description']),
      image: getAsset(feature.getIn(['image'])),
    });
  });

  const products = [];
  entry.getIn(['data', 'products']).forEach(product => {
    products.push({
      title: product.getIn(['title']),
      image: getAsset(product.getIn(['image'])),
      description: product.getIn(['description']),
    });
  });

  return (
    <ProductPageTemplate
      intro={{
        title: entry.getIn(['data', 'intro', 'title']),
      }}
      investorPortal={{
        title: entry.getIn(['data', 'investorPortal', 'title']),
        description: entry.getIn(['data', 'investorPortal', 'description']),
        image: getAsset(entry.getIn(['data', 'investorPortal', 'image'])),
        features,
      }}
      products={products}
    />
  );
};

ProductPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default ProductPagePreview;

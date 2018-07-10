import React from 'react';
import PropTypes from 'prop-types';
import { ProductPageTemplate } from '../../templates/productPage/index';

const ProductPagePreview = ({ entry }) => {
  const entryFeatures = entry.getIn(['data', 'investorPortal', 'features']);
  const features = entryFeatures ? entryFeatures.toJS() : [];

  const entryProducts = entry.getIn(['data', 'products']);
  const products = entryProducts ? entryProducts.toJS() : [];

  return (
    <ProductPageTemplate
      intro={{
        title: entry.getIn(['data', 'intro', 'title']),
      }}
      investorPortal={{
        title: entry.getIn(['data', 'investorPortal', 'title']),
        description: entry.getIn(['data', 'investorPortal', 'description']),
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
};

export default ProductPagePreview;

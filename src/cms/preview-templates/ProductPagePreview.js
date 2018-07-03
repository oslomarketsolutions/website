import React from 'react';
import PropTypes from 'prop-types';
import { ProductPageTemplate } from '../../templates/productPage/index';

const ProductPagePreview = ({ entry, widgetsFor }) => {
  const links = [];
  const features = [];
  const products = [];

  widgetsFor('intro').forEach(intro =>
    console.log(intro.getIn(['links', 'text'])),
  );

  return (
    <ProductPageTemplate
      intro={entry.getIn(['data', 'intro'])}
      investorPortal={entry.getIn(['data', 'investorPortal'])}
      products={entry.getIn(['data', 'products'])}
    />
  );
};

ProductPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetsFor: PropTypes.func,
};

export default ProductPagePreview;

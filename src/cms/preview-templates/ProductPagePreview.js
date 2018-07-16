import React from 'react';
import PropTypes from 'prop-types';
import { ProductPageTemplate } from '../../templates/productPage/index';
import PreviewWrapper from '../../components/previewWrapper';

const ProductPagePreview = ({ entry }) => (
  <PreviewWrapper>
    <ProductPageTemplate
      intro={entry.getIn(['data', 'intro'])}
      investorPortal={entry.getIn(['data', 'investorPortal'])}
      products={entry.getIn(['data', 'products'])}
    />
  </PreviewWrapper>
);

ProductPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default ProductPagePreview;

import React from 'react';
import PropTypes from 'prop-types';
import { ProductPageTemplate } from '../../templates/productPage/index';
import PreviewWrapper from '../../components/previewWrapper';

const ProductPagePreview = ({ entry, getAsset }) => {
  const features = entry
    .getIn(['data', 'investorPortal', 'features'])
    .map(feature => ({
      title: feature.getIn(['title']),
      description: feature.getIn(['description']),
      image: getAsset(feature.getIn(['image'])),
    }))
    .toJS();

  const products = entry
    .getIn(['data', 'products'])
    .map(product => ({
      title: product.getIn(['title']),
      image: getAsset(product.getIn(['image'])),
      description: product.getIn(['description']),
    }))
    .toJS();

  return (
    <PreviewWrapper>
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
    </PreviewWrapper>
  );
};

ProductPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default ProductPagePreview;

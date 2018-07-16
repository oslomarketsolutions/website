import React from 'react';
import PropTypes from 'prop-types';
import FeatureCard from '../../components/featureCard';
import PreviewWrapper from '../../components/previewWrapper';

const FeaturePreview = ({ entry, getAsset }) => (
  <PreviewWrapper>
    <FeatureCard
      title={entry.getIn(['data', 'title'])}
      description={entry.getIn(['data', 'description'])}
      features={entry.getIn(['data', 'features'])}
      image={getAsset(entry.getIn(['data', 'image']))}
    />
  </PreviewWrapper>
);

FeaturePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default FeaturePreview;

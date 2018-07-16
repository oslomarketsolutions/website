import React from 'react';
import PropTypes from 'prop-types';
import FeatureCard from '../../components/featureCard';

const FeaturePreview = ({ entry, getAsset }) => (
  <FeatureCard
    title={entry.getIn(['data', 'title'])}
    description={entry.getIn(['data', 'description'])}
    features={entry.getIn(['data', 'features'])}
    image={getAsset(entry.getIn(['data', 'image']))}
  />
);

FeaturePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default FeaturePreview;

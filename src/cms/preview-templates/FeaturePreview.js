import React from 'react';
import PropTypes from 'prop-types';
import FeatureCard from '../../components/featureCard';

const FeaturePreview = ({ entry }) => (
  <FeatureCard
    title={entry.getIn(['data', 'title'])}
    description={entry.getIn(['data', 'description'])}
    features={entry.getIn(['data', 'features'])}
    image={entry.getIn(['data', 'image'])}
  />
);

FeaturePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default FeaturePreview;

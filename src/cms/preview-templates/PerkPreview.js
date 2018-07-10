import React from 'react';
import PropTypes from 'prop-types';
import PerkCard from '../../components/perkCard';

const PerkPreview = ({ entry }) => (
  <PerkCard
    title={entry.getIn(['data', 'title'])}
    text={entry.getIn(['data', 'text'])}
    color="#91e0ff"
  />
);

PerkPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default PerkPreview;

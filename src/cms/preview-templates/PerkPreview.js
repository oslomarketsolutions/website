import React from 'react';
import PropTypes from 'prop-types';
import PerkCard from '../../components/perkCard';
import PreviewWrapper from '../../components/previewWrapper';

const PerkPreview = ({ entry }) => (
  <PreviewWrapper>
    <PerkCard
      title={entry.getIn(['data', 'title'])}
      text={entry.getIn(['data', 'text'])}
      color="#91e0ff"
    />
  </PreviewWrapper>
);

PerkPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default PerkPreview;

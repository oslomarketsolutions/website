import React from 'react';
import PropTypes from 'prop-types';
import { ResponsibleDisclosureTemplate } from '../../templates/responsibleDisclosurePage/index';
import PreviewWrapper from '../../components/previewWrapper';

const ResponsibleDisclosurePreview = ({ entry, getAsset }) => (
  <PreviewWrapper>
    <ResponsibleDisclosureTemplate />
  </PreviewWrapper>
);

ResponsibleDisclosurePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default ResponsibleDisclosurePreview;

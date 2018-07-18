import React from 'react';
import PropTypes from 'prop-types';
import { ResponsibleDisclosureTemplate } from '../../templates/responsibleDisclosurePage/index';
import PreviewWrapper from '../../components/previewWrapper';

const ResponsibleDisclosurePreview = ({ entry, getAsset }) => (
  <PreviewWrapper>
    <ResponsibleDisclosureTemplate
      title={entry.getIn(['data', 'title'])}
      image={getAsset(entry.getIn(['data', 'image']))}
      visitingAddress={entry.getIn(['data', 'visitingAddress'])}
      phoneNumber={entry.getIn(['data', 'phoneNumber'])}
      mailAddress={entry.getIn(['data', 'mailAddress'])}
    />
  </PreviewWrapper>
);

ResponsibleDisclosurePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default ResponsibleDisclosurePreview;

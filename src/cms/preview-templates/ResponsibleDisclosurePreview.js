import React from 'react';
import PropTypes from 'prop-types';
import { ResponsibleDisclosureTemplate } from '../../templates/responsibleDisclosurePage/index';
import PreviewWrapper from '../../components/previewWrapper';

const ResponsibleDisclosurePreview = ({ entry, getAsset }) => (
  <PreviewWrapper>
    <ResponsibleDisclosureTemplate
      title={entry.getIn(['data', 'contactInfo', 'title'])}
      image={getAsset(entry.getIn(['data', 'contactInfo', 'image']))}
      visitingAddress={entry.getIn(['data', 'contactInfo', 'visitingAddress'])}
      phoneNumber={entry.getIn(['data', 'contactInfo', 'phoneNumber'])}
      mailAddress={entry.getIn(['data', 'contactInfo', 'mailAddress'])}
      content={entry.getIn(['data', 'body'])}
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

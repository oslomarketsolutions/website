import React from 'react';
import PropTypes from 'prop-types';
import Showdown from 'showdown';
import { ResponsibleDisclosurePageTemplate } from '../../templates/responsibleDisclosurePage/index';
import PreviewWrapper from '../../components/previewWrapper/index';

const mdToHtmlConverter = new Showdown.Converter();

const ResponsibleDisclosurePreview = ({ entry, getAsset }) => (
  <PreviewWrapper>
    <ResponsibleDisclosurePageTemplate
      title={entry.getIn(['data', 'contactInfo', 'title'])}
      image={getAsset(entry.getIn(['data', 'contactInfo', 'image']))}
      visitingAddress={entry.getIn(['data', 'contactInfo', 'visitingAddress'])}
      phoneNumber={entry.getIn(['data', 'contactInfo', 'phoneNumber'])}
      mailAddress={entry.getIn(['data', 'contactInfo', 'mailAddress'])}
      content={mdToHtmlConverter.makeHtml(entry.getIn(['data', 'body']))}
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

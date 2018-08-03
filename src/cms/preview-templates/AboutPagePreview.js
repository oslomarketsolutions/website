import React from 'react';
import PropTypes from 'prop-types';
import { AboutPageTemplate } from '../../templates/aboutPage/index';
import PreviewWrapper from '../../components/previewWrapper';

const AboutPagePreview = ({ entry, getAsset }) => (
  <PreviewWrapper>
    <AboutPageTemplate
      title={entry.getIn(['data', 'title'])}
      image={getAsset(entry.getIn(['data', 'image']))}
      imageAlt={entry.getIn(['data', 'imageAlt'])}
      text={entry.getIn(['data', 'text'])}
      header={entry.getIn(['data', 'header'])}
    />
  </PreviewWrapper>
);

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default AboutPagePreview;

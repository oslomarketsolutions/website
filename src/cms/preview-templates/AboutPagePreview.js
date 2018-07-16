import React from 'react';
import PropTypes from 'prop-types';
import { AboutPageTemplate } from '../../templates/aboutPage/index';
import PreviewWrapper from '../../components/previewWrapper';

const AboutPagePreview = ({ entry }) => (
  <PreviewWrapper>
    <AboutPageTemplate
      title={entry.getIn(['data', 'title'])}
      header1={entry.getIn(['data', 'header1'])}
      image={entry.getIn(['data', 'image'])}
      text={entry.getIn(['data', 'text'])}
      header2={entry.getIn(['data', 'header2'])}
    />
  </PreviewWrapper>
);

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default AboutPagePreview;

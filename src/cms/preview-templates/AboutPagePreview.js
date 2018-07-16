import React from 'react';
import PropTypes from 'prop-types';
import { AboutPageTemplate } from '../../templates/aboutPage/index';

const AboutPagePreview = ({ entry, getAsset }) => (
  <AboutPageTemplate
    title={entry.getIn(['data', 'title'])}
    header1={entry.getIn(['data', 'header1'])}
    image={getAsset(entry.getIn(['data', 'image']))}
    text={entry.getIn(['data', 'text'])}
    header2={entry.getIn(['data', 'header2'])}
  />
);

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default AboutPagePreview;

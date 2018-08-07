import React from 'react';
import PropTypes from 'prop-types';
import { CareerPageTemplate } from '../../templates/careerPage/index';
import PreviewWrapper from '../../components/previewWrapper';

const CareerPagePreview = ({ entry, getAsset }) => (
  <PreviewWrapper>
    <CareerPageTemplate
      title={entry.getIn(['data', 'title'])}
      image1={getAsset(entry.getIn(['data', 'image1']))}
      image1Alt={entry.getIn(['data', 'image1Alt'])}
      text1={entry.getIn(['data', 'text1'])}
      header={entry.getIn(['data', 'header'])}
      image2={getAsset(entry.getIn(['data', 'image2']))}
      image2Alt={entry.getIn(['data', 'image2Alt'])}
      text2={entry.getIn(['data', 'text2'])}
      perks={entry.getIn(['data', 'perks'])}
      jobVacanciesTitle={entry.getIn(['data', 'jobVacanciesTitle'])}
    />
  </PreviewWrapper>
);

CareerPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default CareerPagePreview;

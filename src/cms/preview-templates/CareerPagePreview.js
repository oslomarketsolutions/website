import React from 'react';
import PropTypes from 'prop-types';
import { CareerPageTemplate } from '../../templates/careerPage/index';
import PreviewWrapper from '../../components/previewWrapper';

const CareerPagePreview = ({ entry, getAsset }) => {
  // I don't think we have access to the perklist through the CMS preview,
  // it's fetched by a query in careerPage/index.js
  const perkList = [
    {
      node: {
        frontmatter: {
          title: 'Perk Card',
          text: 'Disse kortene redigeres på egen side',
        },
      },
    },
  ];

  return (
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
        subHeader1={entry.getIn(['data', 'subHeader1'])}
        subHeader2={entry.getIn(['data', 'subHeader2'])}
        perkList={perkList}
      />
    </PreviewWrapper>
  );
};

CareerPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default CareerPagePreview;

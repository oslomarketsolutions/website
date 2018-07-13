import React from 'react';
import PropTypes from 'prop-types';
import { CareerPageTemplate } from '../../templates/careerPage/index';

const CareerPagePreview = ({ entry }) => {
  // I don't think we have access to the perklist from careerPage,
  // it's fetched by a query in CareerPageTemplate
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
    <CareerPageTemplate
      title={entry.getIn(['data', 'title'])}
      image1={entry.getIn(['data', 'image1'])}
      text1={entry.getIn(['data', 'text1'])}
      header={entry.getIn(['data', 'header'])}
      image2={entry.getIn(['data', 'image2'])}
      text2={entry.getIn(['data', 'text2'])}
      subHeader1={entry.getIn(['data', 'subHeader1'])}
      subHeader2={entry.getIn(['data', 'subHeader2'])}
      perkList={perkList}
    />
  );
};

CareerPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default CareerPagePreview;

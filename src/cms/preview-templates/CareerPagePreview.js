import React from 'react';
import PropTypes from 'prop-types';
import { CareerPageTemplate } from '../../templates/careerPage/index';

const CareerPagePreview = ({ entry }) => {
  // I don't think we have access to the perklist from careerPage,
  // it's fetched by a query in CareerPageTemplate
  const perkList = [];

  return (
    <CareerPageTemplate
      content={entry.getIn(['data', 'body'])}
      title={entry.getIn(['data', 'title'])}
      text={entry.getIn(['data', 'text'])}
      image={entry.getIn(['data', 'image'])}
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

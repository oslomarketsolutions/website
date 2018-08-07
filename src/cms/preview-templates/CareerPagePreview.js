import React from 'react';
import PropTypes from 'prop-types';
import { CareerPageTemplate } from '../../templates/careerPage/index';
import PreviewWrapper from '../../components/previewWrapper';

const CareerPagePreview = ({ entry }) => {
  const perkCards = entry
    .getIn(['data', 'secondSection', 'perks', 'perkCards'])
    .map(perkCard => ({
      perkTitle: perkCard.get('perkTitle'),
      text: perkCard.get('text'),
    }));

  const perks = {
    title: entry.getIn(['data', 'perks', 'title']),
    perkCards,
  };

  return (
    <PreviewWrapper>
      <CareerPageTemplate
        firstSection={entry.getIn(['data', 'firstSection'])}
        secondSection={entry.getIn(['data', 'secondSection'])}
        perks={perks}
        thirdSection={entry.getIn(['data', 'thirdSection'])}
      />
    </PreviewWrapper>
  );
};

CareerPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default CareerPagePreview;

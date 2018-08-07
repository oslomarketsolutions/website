import React from 'react';
import PropTypes from 'prop-types';
import { CareerPageTemplate } from '../../templates/careerPage/index';
import PreviewWrapper from '../../components/previewWrapper';

const CareerPagePreview = ({ entry, getAsset }) => {
  const firstSection = {
    title: entry.getIn(['data', 'firstSection', 'title']),
    text: entry.getIn(['data', 'firstSection', 'text']),
    image: getAsset(entry.getIn(['data', 'firstSection', 'image'])),
    imageAlt: entry.getIn(['data', 'firstSection', 'imageAlt']),
  };

  const secondSection = {
    title: entry.getIn(['data', 'secondSection', 'title']),
    text: entry.getIn(['data', 'secondSection', 'text']),
    image: getAsset(entry.getIn(['data', 'secondSection', 'image'])),
    imageAlt: entry.getIn(['data', 'secondSection', 'imageAlt']),
  };

  const thirdSection = {
    title: entry.getIn(['data', 'thirdSection', 'title']),
    text: entry.getIn(['data', 'thirdSection', 'text']),
    image: getAsset(entry.getIn(['data', 'thirdSection', 'image'])),
    imageAlt: entry.getIn(['data', 'thirdSection', 'imageAlt']),
  };

  const perkCards = entry
    .getIn(['data', 'secondSection', 'perks', 'perkCards'])
    .map(perkCard => ({
      perkTitle: perkCard.get('perkTitle'),
      text: perkCard.get('text'),
    }));

  const perks = {
    title: entry.getIn(['data', 'secondSection', 'perks', 'title']),
    perkCards,
  };

  return (
    <PreviewWrapper>
      <CareerPageTemplate
        firstSection={firstSection}
        secondSection={secondSection}
        perks={perks}
        thirdSection={thirdSection}
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

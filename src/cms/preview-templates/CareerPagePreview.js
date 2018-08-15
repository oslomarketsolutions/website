import React from 'react';
import PropTypes from 'prop-types';
import { CareerPageTemplate } from '../../templates/careerPage/index';
import PreviewWrapper from '../../components/previewWrapper';

const CareerPagePreview = ({ entry, getAsset }) => {
  const entryHero = entry.getIn(['data', 'hero']);
  const hero = entryHero ? entryHero.toJS() : [];
  hero.backgroundImage = getAsset(
    entry.getIn(['data', 'hero', 'backgroundImage']),
  );

  const entryAbout = entry.getIn(['data', 'about']);
  const about = entryAbout ? entryAbout.toJS() : [];

  const entryPerks = entry.getIn(['data', 'perks']);
  const perks = entryPerks ? entryPerks.toJS() : [];

  const entryPositions = entry.getIn(['data', 'positions']);
  const positions = entryPositions ? entryPositions.toJS() : [];

  return (
    <PreviewWrapper>
      <CareerPageTemplate
        hero={hero}
        about={about}
        perks={perks}
        positions={positions}
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

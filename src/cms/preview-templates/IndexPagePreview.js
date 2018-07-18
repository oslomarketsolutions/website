import React from 'react';
import PropTypes from 'prop-types';
// As the norwegian and english index pages
// has the exact same code except for query
// we don't need two previews.
import IndexPage from '../../pages/no/index';
import PreviewWrapper from '../../components/previewWrapper';

// This preview template is a little special because
// IndexPage doesn't have a template in its index.js-file.
// That means it takes in one prop (data) unlike the other pages (which has templates)
// that take in multiple props.
const IndexPagePreview = ({ entry, getAsset }) => {
  const customerLogos = entry
    .getIn(['data', 'customerLogos'])
    .map(customerLogo => ({
      logo: getAsset(customerLogo.get('logo')),
      name: customerLogo.get('name'),
    }));

  const customizationCards = entry
    .getIn(['data', 'customization', 'cards'])
    .map(card => ({
      header: card.get('header'),
      image: getAsset(card.get('image')),
      description: card.get('description'),
      features: card.get('features').toJS(),
    }));

  const configurationLogos = entry
    .getIn(['data', 'configurationLogos'])
    .map(configurationLogo => ({
      logo: getAsset(configurationLogo.get('logo')),
      name: configurationLogo.get('name'),
    }));

  // Create the data object IndexPage expects
  const data = {
    imageSizes: { edges: [] },
    page: {
      frontmatter: {
        topImage: {
          image: getAsset(entry.getIn(['data', 'topImage', 'image'])),
          alt: entry.getIn(['data', 'topImage', 'alt']),
        },
        configurationLogos,
        featuredContent: {
          image: getAsset(entry.getIn(['data', 'featuredContent', 'image'])),
          header: entry.getIn(['data', 'featuredContent', 'header']),
          text: entry.getIn(['data', 'featuredContent', 'text']),
        },
        customization: {
          header: entry.getIn(['data', 'customization', 'header']),
          cards: customizationCards,
        },
        solutionsContent: {
          firstCard: {
            image: getAsset(
              entry.getIn(['data', 'solutionsContent', 'firstCard', 'image']),
            ),
            header: entry.getIn([
              'data',
              'solutionsContent',
              'firstCard',
              'header',
            ]),
            text: entry.getIn([
              'data',
              'solutionsContent',
              'firstCard',
              'text',
            ]),
          },
          secondCard: {
            image: getAsset(
              entry.getIn(['data', 'solutionsContent', 'secondCard', 'image']),
            ),
            header: entry.getIn([
              'data',
              'solutionsContent',
              'secondCard',
              'header',
            ]),
            text: entry.getIn([
              'data',
              'solutionsContent',
              'secondCard',
              'text',
            ]),
          },
        },
        customerLogos,
      },
    },
  };

  return (
    <PreviewWrapper>
      <IndexPage data={data} />
    </PreviewWrapper>
  );
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
    get: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default IndexPagePreview;

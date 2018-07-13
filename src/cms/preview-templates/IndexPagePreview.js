import React from 'react';
import PropTypes from 'prop-types';
// As the norwegian and english index pages
// has the exact same code except for query
// we don't need both.
import IndexPage from '../../pages/no/index';

// This preview template is a little special because
// IndexPage doesn't have a template in its index.js-file.
// That means it takes in one prop (data) unlike the other pages (which has templates)
// that take in multiple props.
const IndexPagePreview = ({ entry }) => {
  const entryCustomerLogos = entry.getIn(['data', 'customerLogos']);
  const customerLogos = entryCustomerLogos ? entryCustomerLogos.toJS() : [];

  const entryCustomizationCards = entry.getIn([
    'data',
    'customization',
    'cards',
  ]);
  const customizationCards = entryCustomizationCards
    ? entryCustomizationCards.toJS()
    : [];

  const entryConfigurationLogos = entry.getIn(['data', 'configurationLogos']);
  const configurationLogos = entryConfigurationLogos
    ? entryConfigurationLogos.toJS()
    : [];

  // Create the data object IndexPage expects
  const data = {
    imageSizes: { edges: [] },
    page: {
      frontmatter: {
        topImage: entry.getIn(['data', 'topImage']),
        configurationLogos,
        featuredContent: {
          image: entry.getIn(['data', 'featuredContent', 'image']),
          header: entry.getIn(['data', 'featuredContent', 'header']),
          text: entry.getIn(['data', 'featuredContent', 'text']),
        },
        customization: {
          header: entry.getIn(['data', 'customization', 'header']),
          cards: customizationCards,
        },
        solutionsContent: {
          firstCard: {
            image: entry.getIn([
              'data',
              'solutionsContent',
              'firstCard',
              'image',
            ]),
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
            image: entry.getIn([
              'data',
              'solutionsContent',
              'secondCard',
              'image',
            ]),
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

  return <IndexPage data={data} />;
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default IndexPagePreview;

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
const IndexPagePreview = ({ entry, widgetsFor }) => {
  const customerLogos = [];
  const customizationCards = [];
  const configurationLogos = [];

  widgetsFor('customerLogos').forEach(logo => {
    if (logo === undefined) return;
    customerLogos.push({
      logo: logo.getIn(['data', 'logo']),
    });
  });

  widgetsFor('configurationLogos').forEach(logo => {
    if (logo === undefined) return;
    configurationLogos.push({
      logo: logo.getIn(['data', 'logo']),
    });
  });

  widgetsFor('customizationCards').forEach(card => {
    if (card === undefined) return;
    customizationCards.push({
      header: card.getIn(['data', 'header']),
      description: card.getIn(['data', 'description']),
      image: card.getIn(['data', 'image']),
      features: card.getIn(['data', 'features']),
    });
  });

  const data = {
    markdownRemark: {
      frontmatter: {
        topImage: entry.getIn(['data', 'topImage']),
        configurationLogos,
        featuredContent: {
          image: entry.getIn(['data', 'featuredContent', 'image']),
          header: entry.getIn(['data', 'featuredContent', 'header']),
          text: entry.getIn(['data', 'featuredContent', 'text']),
        },
        customizationCards,
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

  console.log(data);

  return (
    <div>
      <IndexPage data={data} />
    </div>
  );
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetsFor: PropTypes.func,
};

export default IndexPagePreview;

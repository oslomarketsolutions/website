import React from 'react';
import PropTypes from 'prop-types';
import IndexPage from '../../pages/no/index';

const IndexPagePreview = ({ entry, widgetsFor }) => {
  const customerLogos = [];
  const configurationLogos = [];

  widgetsFor('customerLogos').forEach(logo => {
    customerLogos.push({
      logo: logo.getIn(['data', 'logo']),
    });
  });

  widgetsFor('configurationLogos').forEach(logo => {
    configurationLogos.push({
      logo: logo.getIn(['data', 'logo']),
    });
  });

  const data = {
    markdownRemark: {
      frontmatter: {
        topImage: entry.getIn(['data', 'topImage']),
        featuredContent: {
          image: entry.getIn(['data', 'featuredContent', 'image']),
          header: entry.getIn(['data', 'featuredContent', 'header']),
          text: entry.getIn(['data', 'featuredContent', 'text']),
        },
        configurationLogos,
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

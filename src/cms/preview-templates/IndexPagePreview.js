import React from 'react';
import PropTypes from 'prop-types';
import IndexPage from '../../pages/no/index';

const IndexPagePreview = ({ entry }) => (
  <div>
    <IndexPage
      topImage={entry.getIn(['data', 'topImage'])}
      featuredContent={{
        image: entry.getIn(['data', 'featuredContent', 'image']),
        header: entry.getIn(['data', 'featuredContent', 'header']),
        text: entry.getIn(['data', 'featuredContent', 'text']),
      }}
    />
  </div>
);

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default IndexPagePreview;

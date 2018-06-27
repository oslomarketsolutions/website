import React from 'react';
import PropTypes from 'prop-types';
import IndexPage from '../../pages/no/index';

const IndexPagePreview = ({ entry }) => (
  <div>
    <IndexPage
      topImage={entry.getIn(['data', 'topImage'])}
      featuredContent={{
        header: entry.getIn(['data', 'featuredContent', 'header']),
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

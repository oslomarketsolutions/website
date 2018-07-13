import React from 'react';
import PropTypes from 'prop-types';
import { BlogPostTemplate } from '../../templates/blogPost/index';
import PreviewWrapper from '../../components/previewWrapper';

const BlogPostPreview = ({ entry, widgetFor }) => (
  <PreviewWrapper>
    <BlogPostTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      tags={entry.getIn(['data', 'tags'])}
      title={entry.getIn(['data', 'title'])}
    />
  </PreviewWrapper>
);

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default BlogPostPreview;

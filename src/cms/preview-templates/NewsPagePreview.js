import React from 'react';
import PropTypes from 'prop-types';
import Showdown from 'showdown';
import { NewsPageTemplate } from '../../templates/newsPage/index';
import PreviewWrapper from '../../components/previewWrapper';

const mdToHtmlConverter = new Showdown.Converter();

const NewsPagePreview = ({ entry, getAsset }) => (
  <PreviewWrapper>
    <NewsPageTemplate
      title={entry.getIn(['data', 'title'])}
      date={entry.getIn(['data', 'date'])}
      image={getAsset(entry.getIn(['data', 'image']))}
      content={mdToHtmlConverter.makeHtml(entry.getIn(['data', 'body']))}
    />
  </PreviewWrapper>
);

NewsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default NewsPagePreview;

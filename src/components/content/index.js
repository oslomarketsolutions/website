import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable react/no-danger */
export const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
);
/* eslint-enable react/no-danger */

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
);

Content.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string,
};

HTMLContent.propTypes = Content.propTypes;

export default Content;

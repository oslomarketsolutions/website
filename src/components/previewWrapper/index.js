import React from 'react';
import PropTypes from 'prop-types';
import typography from '../../utils/typography';
import '../../layouts/index';

const PreviewWrapper = ({ children }) => (
  <div>
    <style>{typography.toString()}</style>
    {children()}
  </div>
);

export default PreviewWrapper;

PreviewWrapper.propTypes = {
  children: PropTypes.func,
};

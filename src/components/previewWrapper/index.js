import { dom } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import PropTypes from 'prop-types';
import typography from '../../utils/typography';
import '../../layouts/index';

const fontAwesomeCSS = dom.css();

const PreviewWrapper = ({ children }) => (
  <div>
    <style>{fontAwesomeCSS}</style>
    <style>{typography.toString()}</style>
    {children}
  </div>
);

export default PreviewWrapper;

PreviewWrapper.propTypes = {
  children: PropTypes.node,
};

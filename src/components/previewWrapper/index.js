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
    <link
      href="https://fonts.googleapis.com/css?family=Muli:400,600,700,800|Work+Sans:300,400"
      rel="stylesheet"
    />
    {children}
  </div>
);

export default PreviewWrapper;

PreviewWrapper.propTypes = {
  children: PropTypes.node,
};

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import './all.sass';

const TemplateWrapper = ({ children, location }) => (
  <React.Fragment>
    <Helmet title="Oslo Market Solutions" />
    <Navbar location={location} />
    {children()}
  </React.Fragment>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;

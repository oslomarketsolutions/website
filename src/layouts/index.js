import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import './style.scss';
import Navbar from '../components/navbar/index';

const TemplateWrapper = ({ children, location }) => {
  const parsedPath = /^\/(\w\w)/.exec(location.pathname);
  const lang = parsedPath && parsedPath[1];

  return (
    <React.Fragment>
      <Helmet title="Oslo Market Solutions">
        <html lang={lang} />
      </Helmet>
      <Navbar lang={lang} />
      {children()}
    </React.Fragment>
  );
};

TemplateWrapper.propTypes = {
  location: PropTypes.shape({}),
  children: PropTypes.func,
};

export default TemplateWrapper;

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import favicon from '../img/favicon_oms.png';

import './style.scss';
import Navbar from '../components/navbar/index';

const TemplateWrapper = ({ children, location }) => {
  const parsedPath = /^\/(\w\w)/.exec(location.pathname);
  const language = parsedPath && parsedPath[1];

  return (
    <React.Fragment>
      <Helmet title="Oslo Market Solutions">
        <link rel="icon" type="image/png" href={favicon} />
        <html lang={language} />
      </Helmet>
      <Navbar language={language} />
      {children()}
    </React.Fragment>
  );
};

TemplateWrapper.propTypes = {
  location: PropTypes.shape({}),
  children: PropTypes.func,
};

export default TemplateWrapper;

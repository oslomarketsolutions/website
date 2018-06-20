import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import favicon from '../img/favicon_oms.jpg';

import './style.scss';
import Navbar from '../components/Navbar';

const TemplateWrapper = ({ children, location }) => {
  const parsedPath = /^\/(\w\w)/.exec(location.pathname);
  const lang = parsedPath && parsedPath[1];

  return (
    <React.Fragment>
      <Helmet title="Oslo Market Solutions">
        <html lang={lang} />
        <link rel="shortcut icon" type="image/jpg" href={favicon} />
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

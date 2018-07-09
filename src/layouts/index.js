import React from 'react';
import PropTypes from 'prop-types';

import { library, dom } from '@fortawesome/fontawesome-svg-core';
import {
  faLinkedin,
  faFacebook,
  faMedium,
  faGithubSquare,
} from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

import Helmet from 'react-helmet';
import favicon from '../img/favicon_oms.png';

import './style.scss';
import Navbar from '../components/navbar/index';
import Footer from '../components/footer/index';

library.add(
  faLinkedin,
  faFacebook,
  faMedium,
  faGithubSquare,
  faGlobe,
  faCopyright,
  faArrowUp,
);

const fontAwesomeCSS = dom.css();

const TemplateWrapper = ({ children, location }) => {
  const parsedPath = /^\/(\w\w)/.exec(location.pathname);
  const language = parsedPath && parsedPath[1];

  return (
    <React.Fragment>
      <Helmet title="Oslo Market Solutions">
        <link rel="icon" type="image/png" href={favicon} />
        <html lang={language} />
        <style>{fontAwesomeCSS}</style>
      </Helmet>
      <Navbar language={language} location={location} />
      {children()}
      <Footer language={language} />
    </React.Fragment>
  );
};

TemplateWrapper.propTypes = {
  location: PropTypes.shape({}),
  children: PropTypes.func,
};

export default TemplateWrapper;

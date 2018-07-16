import React from 'react';
import PropTypes from 'prop-types';

import { library, dom } from '@fortawesome/fontawesome-svg-core';
import {
  faLinkedin,
  faFacebook,
  faMedium,
  faGithubSquare,
} from '@fortawesome/free-brands-svg-icons';
import {
  faGlobe,
  faArrowUp,
  faServer,
  faGraduationCap,
  faCoffee,
  faFlask,
  faUserSecret,
} from '@fortawesome/free-solid-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

import Helmet from 'react-helmet';
import favicon from '../img/favicon_oms.png';

import './style.scss';
import Navbar from '../components/navbar/index';
import Footer from '../components/footer/index';

export const faLibrary = library.add(
  faLinkedin,
  faFacebook,
  faMedium,
  faGithubSquare,
  faGlobe,
  faCopyright,
  faArrowUp,
  faServer,
  faGraduationCap,
  faCoffee,
  faFlask,
  faUserSecret,
);

const fontAwesomeCSS = dom.css();

const TemplateWrapper = ({ children, location, data }) => {
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
      <Footer language={language} data={data} />
    </React.Fragment>
  );
};

TemplateWrapper.propTypes = {
  location: PropTypes.shape({}),
  children: PropTypes.func,
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default TemplateWrapper;

export const footerQuery = graphql`
  query Footer {
    markdownRemark(id: { regex: "/src/pages/footer/index.md/" }) {
      frontmatter {
        groupWebsites {
          website1 {
            title
            url
          }
          website2 {
            title
            url
          }
          website3 {
            title
            url
          }
          website4 {
            title
            url
          }
          website5 {
            title
            url
          }
          website6 {
            title
            url
          }
        }
        contactInfo {
          title
          visitingAddress
          phoneNumber
          email
          mailAddress
        }
      }
    }
  }
`;

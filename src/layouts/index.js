import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { library, dom } from '@fortawesome/fontawesome-svg-core';
import {
  faLinkedin,
  faFacebook,
  faMedium,
  faGithubSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import {
  faArrowUp,
  faServer,
  faGraduationCap,
  faCogs,
  faCode,
  faBriefcase,
  faMapPin,
  faPhone,
  faEnvelope,
  faFireExtinguisher,
  faPaintBrush,
  faArrowRight,
  faChartArea,
  faCodeBranch,
  faCheck,
  faAdjust,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import {
  faCopyright,
  faCheckCircle,
} from '@fortawesome/free-regular-svg-icons';

import { faGlobe } from '@fortawesome/pro-light-svg-icons';

import Helmet from 'react-helmet';
import favicon from '../img/favicon_oms.png';

import './style.scss';
import Navbar from '../components/navbar/index';
import Footer from '../components/footer/index';
import { getCookie, setCookie } from '../utils/helperFunctions';

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
  faCogs,
  faCode,
  faBriefcase,
  faMapPin,
  faPhone,
  faEnvelope,
  faFireExtinguisher,
  faPaintBrush,
  faArrowRight,
  faCheckCircle,
  faReact,
  faChartArea,
  faCodeBranch,
  faCheck,
  faAdjust,
  faChevronRight,
);

const fontAwesomeCSS = dom.css();

export default class TemplateWrapper extends Component {
  static propTypes = {
    location: PropTypes.shape({}),
    children: PropTypes.func,
    data: PropTypes.shape({
      allMarkdownRemark: PropTypes.shape({
        edges: PropTypes.array,
      }),
    }),
  };

  state = {
    showCookiePopUp: getCookie('haveSeenPopUp') === '',
    setHubspotCookie: getCookie('setHubspotCookie') !== '',
    setGoogleAnalyticsCookie: getCookie('setGoogleAnalyticsCookie') !== '',
  };

  handleConfirmation = confirmedAll => {
    if (confirmedAll) {
      setCookie('setHubspotCookie', 'true', 365);
      setCookie('setGoogleAnalyticsCookie', 'true', 365);
      this.setState({
        setHubspotCookie: true,
        setGoogleAnalyticsCookie: true,
      });
    }
    setCookie('haveSeenPopUp', 'true', 365);
    this.setState({
      showCookiePopUp: false,
    });
  };

  handleCookieChanges = (isOn, id) => {
    if (id.split(' ')[0] === 'Tracking') {
      if (isOn) {
        setCookie('setHubspotCookie', 'true', 365);
        this.setState({
          setHubspotCookie: true,
        });
      } else {
        // Deleting hubspot cookies
        setCookie('setHubspotCookie', '', -1);
        setCookie('hubspotutk', '', -1);
        this.setState({
          setHubspotCookie: false,
        });
      }
    } else if (id.split(' ')[0] === 'Analytics') {
      if (isOn) {
        setCookie('setGoogleAnalyticsCookie', 'true', 365);
        this.setState({
          setGoogleAnalyticsCookie: true,
        });
      } else {
        // Deleting google analytics cookies
        setCookie('setGoogleAnalyticsCookie', '', -1);
        this.setState({
          setGoogleAnalyticsCookie: false,
        });
      }
    }
    this.forceUpdate();
  };

  render() {
    const { children, location, data } = this.props;

    const parsedPath = /^\/(\w\w)/.exec(location.pathname);
    const language = parsedPath && parsedPath[1];

    return (
      <React.Fragment>
        <Helmet title="Oslo Market Solutions">
          <link rel="icon" type="image/png" href={favicon} />
          <html lang={language} />
          <style>{fontAwesomeCSS}</style>
          <link
            href="https://fonts.googleapis.com/css?family=Muli:400,600,700,800|Work+Sans:300,400"
            rel="stylesheet"
          />
          {this.state.setHubspotCookie && (
            <script
              type="text/javascript"
              id="hs-script-loader"
              async
              defer
              src="//js.hs-scripts.com/2235598.js"
            />
          )}
        </Helmet>
        <div className="grid">
          <Navbar
            language={language}
            location={location}
            data={data.navbar}
            cookieInfo={data.cookieInfo}
            showCookiePopUp={this.state.showCookiePopUp}
            analyticsOn={this.state.setGoogleAnalyticsCookie}
            trackingOn={this.state.setHubspotCookie}
            handleConfirmation={this.handleConfirmation}
            handleCookieChanges={this.handleCookieChanges}
          />
          {children()}
          <Footer language={language} data={data.footer} />
        </div>
      </React.Fragment>
    );
  }
}

export const footerAndNavbarQuery = graphql`
  query FooterAndNavbar {
    footer: markdownRemark(id: { regex: "/src/pages/footer/index.md/" }) {
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
    navbar: markdownRemark(id: { regex: "/src/pages/navbar/index.md/" }) {
      frontmatter {
        numberOfJobVacancies
      }
    }
    cookieInfo: markdownRemark(
      id: { regex: "/src/pages/en/cookieInfo/index.md/" }
    ) {
      frontmatter {
        title
        cookiePopUp {
          text
          manageButtonText
          confirmationButtonText
        }
        cookieManager {
          necessaryCookies {
            header
            text
            cookies {
              name
              purpose
            }
          }
          analyticsCookies {
            header
            text
            cookies {
              name
              purpose
            }
          }
          trackingCookies {
            header
            text
            cookies {
              name
              purpose
            }
          }
          buttonText
        }
      }
    }
  }
`;

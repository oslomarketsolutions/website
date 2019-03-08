import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import {
  faLinkedin,
  faFacebook,
  faMedium,
  faGithubSquare,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import {
  faMapPin,
  faPhone,
  faEnvelope,
  faArrowRight,
  faCheck,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import {
  faCopyright,
  faCheckCircle,
} from '@fortawesome/free-regular-svg-icons';

import {
  faServer,
  faCogs,
  faCode,
  faGraduationCap,
  faFireExtinguisher,
  faBriefcase,
  faDraftingCompass,
} from '@fortawesome/pro-regular-svg-icons';

import { faGlobe, faCookieBite } from '@fortawesome/pro-light-svg-icons';

import Helmet from 'react-helmet';
import favicon from '../img/favicon_oms.png';

import './style.scss';
import Navbar from '../components/navbar/index';
import Footer from '../components/footer/index';
import { getParsedCookie, setCookie, removeCookie } from '../utils/cookies';
import getLanguage from '../utils/language';

export const faLibrary = library.add(
  faLinkedin,
  faFacebook,
  faMedium,
  faGithubSquare,
  faInstagram,
  faGlobe,
  faCopyright,
  faServer,
  faGraduationCap,
  faCogs,
  faCode,
  faBriefcase,
  faMapPin,
  faPhone,
  faEnvelope,
  faFireExtinguisher,
  faDraftingCompass,
  faArrowRight,
  faCheckCircle,
  faCheck,
  faCookieBite,
  faChevronRight,
);

const fontAwesomeCSS = dom.css();

const shouldHideCookiePopUp = () => {
  const haveSeenPopUp = getParsedCookie('haveSeenPopUp');

  // Hide in prerender
  if (haveSeenPopUp === null) return true;

  // In all other cases, show if user has not consented
  return haveSeenPopUp;
};
export default class TemplateWrapper extends Component {
  static propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
    children: PropTypes.func,
    data: PropTypes.shape({
      allMarkdownRemark: PropTypes.shape({
        edges: PropTypes.array,
      }),
    }),
  };

  state = {
    hideCookiePopUp: shouldHideCookiePopUp(),
    setHubspotCookie: getParsedCookie('setHubspotCookie'),
    setGoogleAnalyticsCookie: getParsedCookie('setGoogleAnalyticsCookie'),

    googleAnalyticsIsActive: false,
    googleAnalyticsHasBeenInitialized: false, // The idea with this is to not initialize GA more than once
  };

  componentDidMount = () => {
    // If previously accepted Analytics
    if (this.state.setGoogleAnalyticsCookie) {
      this.enableGoogleAnalytics();
    }
  };

  componentDidUpdate = prevProps => {
    // If user navigates to a different page, log it
    const prevPathname = prevProps.location.pathname;
    const newPathname = this.props.location.pathname;
    if (newPathname !== prevPathname) {
      if (this.state.googleAnalyticsIsActive) {
        ReactGA.pageview(newPathname);
      }
    }
  };

  enableGoogleAnalytics = () => {
    // Check if it's not already active
    if (!this.state.googleAnalyticsIsActive) {
      // If opt-out has been set earlier, disable it again
      if (window['ga-disable-UA-101364630-3']) {
        window['ga-disable-UA-101364630-3'] = false;
      }
      // If Google Analytics hasn't been initialized on this visit
      if (!this.state.googleAnalyticsHasBeenInitialized) {
        ReactGA.initialize('UA-101364630-3');
        ReactGA.ga('set', 'anonymizeIp', true);
        ReactGA.pageview(this.props.location.pathname);
        this.setState({
          googleAnalyticsHasBeenInitialized: true,
        });
      }
      this.setState({
        googleAnalyticsIsActive: true,
      });
    }
  };

  disableGoogleAnalytics = () => {
    if (this.state.googleAnalyticsIsActive) {
      window['ga-disable-UA-101364630-3'] = true;
      this.setState({
        googleAnalyticsIsActive: false,
      });
    }
  };

  handleConfirmation = confirmedAll => {
    if (confirmedAll) {
      setCookie('setHubspotCookie', true, 365);
      setCookie('setGoogleAnalyticsCookie', true, 365);
      this.enableGoogleAnalytics();
      this.setState({
        setHubspotCookie: true,
        setGoogleAnalyticsCookie: true,
      });
    }
    setCookie('haveSeenPopUp', true, 365);
    this.setState({
      hideCookiePopUp: true,
    });
  };

  handleCookieChanges = (analyticsIsOn, trackingIsOn) => {
    if (trackingIsOn) {
      setCookie('setHubspotCookie', true, 365);
      this.setState({
        setHubspotCookie: true,
      });
    } else {
      // Deleting hubspot cookies
      removeCookie('setHubspotCookie');
      removeCookie('hubspotutk');
      removeCookie('__hssc');
      removeCookie('__hssrc');
      removeCookie('__hstc');
      this.setState({
        setHubspotCookie: false,
      });
    }
    if (analyticsIsOn) {
      setCookie('setGoogleAnalyticsCookie', true, 365);
      this.enableGoogleAnalytics();
      this.setState({
        setGoogleAnalyticsCookie: true,
      });
    } else {
      // Deleting google analytics cookies
      const domain = `.${window.location.hostname}`;
      removeCookie('setGoogleAnalyticsCookie');
      removeCookie('_ga', domain);
      removeCookie('_gat', domain);
      removeCookie('_gid', domain);
      this.disableGoogleAnalytics();
      this.setState({
        setGoogleAnalyticsCookie: false,
      });
    }
  };

  render() {
    const { handleCookieChanges, handleConfirmation } = this;
    const { googleAnalyticsIsActive } = this.state;
    const { children, location, data } = this.props;
    const language = getLanguage(location.pathname);

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
            cookieInfoEn={data.cookieInfoEn}
            cookieInfoNo={data.cookieInfoNo}
            hideCookiePopUp={this.state.hideCookiePopUp}
            analyticsOn={this.state.setGoogleAnalyticsCookie}
            trackingOn={this.state.setHubspotCookie}
            handleConfirmation={handleConfirmation}
            handleCookieChanges={handleCookieChanges}
          />
          {children({
            ...this.props,
            handleCookieChanges,
            googleAnalyticsIsActive,
            language,
          })}
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
          visitingAddressNorway
          visitingAddressSweden
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
    cookieInfoEn: markdownRemark(
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
            id
            header
            text
            cookies {
              name
              purpose
            }
          }
          analyticsCookies {
            id
            header
            text
            cookies {
              name
              purpose
            }
          }
          trackingCookies {
            id
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
    cookieInfoNo: markdownRemark(
      id: { regex: "/src/pages/no/cookieInfo/index.md/" }
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
            id
            header
            text
            cookies {
              name
              purpose
            }
          }
          analyticsCookies {
            id
            header
            text
            cookies {
              name
              purpose
            }
          }
          trackingCookies {
            id
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

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import {
  faLinkedin,
  faFacebook,
  faMedium,
  faGithubSquare,
  faReact,
  faSpotify,
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

import {
  faGlobe,
  faUserClock,
  faHome,
  faUtensils,
  faLaptopCode,
  faHandHoldingSeedling,
  faBriefcaseMedical,
  faSnowflake,
  faNewspaper,
  faMobile,
  faHands,
  faDollarSign,
  faPiggyBank,
  faChartLine,
  faShuttleVan,
  faCalendarAlt,
  faWatchFitness,
  faSmileBeam,
} from '@fortawesome/pro-light-svg-icons';

import Helmet from 'react-helmet';
import favicon from '../img/favicon_oms.png';

import './style.scss';
import Navbar from '../components/navbar/index';
import Footer from '../components/footer/index';
import { getParsedCookie, setCookie, removeCookie } from '../utils/cookies';

export const faLibrary = library.add(
  faLinkedin,
  faFacebook,
  faMedium,
  faGithubSquare,
  faSpotify,
  faGlobe,
  faUserClock,
  faHome,
  faUtensils,
  faLaptopCode,
  faHandHoldingSeedling,
  faBriefcaseMedical,
  faSnowflake,
  faNewspaper,
  faMobile,
  faHands,
  faDollarSign,
  faPiggyBank,
  faChartLine,
  faShuttleVan,
  faCalendarAlt,
  faWatchFitness,
  faSmileBeam,
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
    hideCookiePopUp: getParsedCookie('haveSeenPopUp'),
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
      setCookie('setHubspotCookie', 'true', 365);
      setCookie('setGoogleAnalyticsCookie', 'true', 365);
      this.enableGoogleAnalytics();
      this.setState({
        setHubspotCookie: true,
        setGoogleAnalyticsCookie: true,
      });
    }
    setCookie('haveSeenPopUp', 'true', 365);
    this.setState({
      hideCookiePopUp: true,
    });
  };

  handleCookieChanges = (isOn, id) => {
    if (id === 'tracking') {
      if (isOn) {
        setCookie('setHubspotCookie', 'true', 365);
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
    } else if (id === 'analytics') {
      if (isOn) {
        setCookie('setGoogleAnalyticsCookie', 'true', 365);
        this.enableGoogleAnalytics();
        this.setState({
          setGoogleAnalyticsCookie: true,
        });
      } else {
        // Deleting google analytics cookies
        removeCookie('setGoogleAnalyticsCookie');
        this.disableGoogleAnalytics();
        this.setState({
          setGoogleAnalyticsCookie: false,
        });
      }
    }
  };

  render() {
    const { handleCookieChanges, handleConfirmation } = this;
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
            cookieInfoEn={data.cookieInfoEn}
            cookieInfoNo={data.cookieInfoNo}
            hideCookiePopUp={this.state.hideCookiePopUp}
            analyticsOn={this.state.setGoogleAnalyticsCookie}
            trackingOn={this.state.setHubspotCookie}
            handleConfirmation={handleConfirmation}
            handleCookieChanges={handleCookieChanges}
          />
          {children({ ...this.props, handleCookieChanges })}
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

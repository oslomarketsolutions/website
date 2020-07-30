import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import CookieToggle from '../cookieToggle/index';
import logo from '../../img/logo_oms_hoved.png';
import logoWhite from '../../img/logo_oms_hvit.png';
import logoPride from '../../img/logo_oms_pride.svg';
import styles from './navbar.module.scss';

export default class Navbar extends Component {
  static propTypes = {
    language: PropTypes.string,
    location: PropTypes.shape({ pathname: PropTypes.string }),
    data: PropTypes.shape({
      frontmatter: PropTypes.shape({}),
    }),
    cookieInfoEn: PropTypes.shape({ frontmatter: PropTypes.shape({}) }),
    cookieInfoNo: PropTypes.shape({ frontmatter: PropTypes.shape({}) }),
    hideCookiePopUp: PropTypes.bool,
    analyticsOn: PropTypes.bool,
    trackingOn: PropTypes.bool,
    handleConfirmation: PropTypes.func,
    handleCookieChanges: PropTypes.func,
  };

  static defaultProps = {
    language: 'en',
  };

  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  state = {
    cookieManagerOpen: false,
    languageSelectorOpen: false,
    headerUnderline: false,
    trackingIsOn: true,
    analyticsIsOn: true,
    useLocalState: false,
    fullScreenCookieManager: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  getLogo = useWhiteLogo => {
    if (!useWhiteLogo) return logo;
    if (new Date().getMonth() === 5) return logoPride;
    return logoWhite;
  };

  handleScroll() {
    if (document != null) {
      if (
        document.body.scrollTop > 0 ||
        document.documentElement.scrollTop > 0
      ) {
        this.setState({
          headerUnderline: true,
        });
      } else {
        this.setState({
          headerUnderline: false,
        });
      }
    }
  }

  changePageLanguage = () => {
    const pathSplitArray = this.props.location.pathname.split('/');
    let returnPath;

    if (this.props.language === 'en') {
      if (pathSplitArray.length < 3) {
        returnPath = 'no';
      } else {
        returnPath = `/no/${pathSplitArray[2]}`;
      }
    } else if (pathSplitArray.length < 3) {
      returnPath = 'en';
    } else {
      returnPath = `/en/${pathSplitArray[2]}`;
    }

    return returnPath;
  };

  toggleOverflowHiddenBody = () => {
    if (window != null && window.innerWidth < 580) {
      if (!this.state.fullScreenCookieManager) {
        this.setState({
          fullScreenCookieManager: true,
        });
      }
    }
    if (this.state.fullScreenCookieManager) {
      this.setState({
        fullScreenCookieManager: false,
      });
    }
  };

  closePopUpAndOpenManager = () => {
    this.toggleOverflowHiddenBody();
    this.setState({
      cookieManagerOpen: true,
      useLocalState: true,
    });
    this.props.handleConfirmation(false);
  };

  closeCookiePopUp = () => {
    this.props.handleConfirmation(true);
  };

  toggleCookieManager = () => {
    this.toggleOverflowHiddenBody();
    if (!this.props.hideCookiePopUp) {
      this.closePopUpAndOpenManager();
    } else if (!this.state.cookieManagerOpen) {
      this.setState(prevState => ({
        cookieManagerOpen: !prevState.cookieManagerOpen,
        analyticsIsOn: this.props.analyticsOn,
        trackingIsOn: this.props.trackingOn,
        languageSelectorOpen: false,
        useLocalState: true,
      }));
    } else {
      this.setState(prevState => ({
        cookieManagerOpen: !prevState.cookieManagerOpen,
        languageSelectorOpen: false,
      }));
    }
  };

  saveSettings = () => {
    this.toggleOverflowHiddenBody();
    this.setState({
      cookieManagerOpen: false,
    });
    this.props.handleCookieChanges(
      this.state.analyticsIsOn,
      this.state.trackingIsOn,
    );
  };

  handleToggleButton = (isOn, id) => {
    if (id === 'tracking') {
      this.setState({
        trackingIsOn: isOn,
      });
    } else if (id === 'analytics') {
      this.setState({
        analyticsIsOn: isOn,
      });
    }
  };

  toggleLanguageSelector = () => {
    this.setState(prevState => ({
      languageSelectorOpen: !prevState.languageSelectorOpen,
      cookieManagerOpen: false,
    }));
  };

  closeLanguageSelector = () => {
    this.setState({
      languageSelectorOpen: false,
    });
  };

  render() {
    const data = this.props.data.frontmatter;
    const cookieInfo =
      this.props.language === 'en'
        ? this.props.cookieInfoEn.frontmatter
        : this.props.cookieInfoNo.frontmatter;

    const isOnHomePage = this.props.location.pathname.toString().length < 5;
    const navColorWhite = this.state.navOpen ? false : isOnHomePage;

    return (
      <header
        className={classNames({
          [styles.navColorWhite]: navColorWhite,
          [styles.headerUnderline]: this.state.headerUnderline,
        })}
      >
        <div className={styles.navbar}>
          <Helmet>
            {
              <body
                className={classNames({
                  [styles.noScroll]: this.state.fullScreenCookieManager,
                })}
              />
            }
          </Helmet>
          <div className={styles.logoWrapper}>
            <Link
              className={classNames(styles.noHover, styles.logo)}
              to={`/${this.props.language}`}
              onClick={this.closeLanguageSelector}
            >
              <img src={this.getLogo(navColorWhite)} alt="Oms logo" />
            </Link>
          </div>
          <nav>
            <ul className="navLinks">
              <li>
                <Link
                  activeClassName={styles.active}
                  to={`/${this.props.language}/products`}
                  onClick={this.closeLanguageSelector}
                >
                  {this.props.language === 'en' ? 'Services' : 'Produkter'}
                </Link>
              </li>
              <li className={styles.careers}>
                <Link
                  activeClassName={styles.active}
                  to={`/${this.props.language}/career`}
                  onClick={this.closeLanguageSelector}
                >
                  {this.props.language === 'en' ? 'Careers' : 'Jobb'}
                  {data.numberOfJobVacancies && (
                    <div className={styles.notification}>
                      <p className="notification">
                        {data.numberOfJobVacancies}
                      </p>
                    </div>
                  )}
                </Link>
              </li>
              <li
                className={classNames(styles.noPaddingRight, {
                  [styles.aboutUs]: this.props.language === 'en',
                })}
              >
                <Link
                  activeClassName={styles.active}
                  to={`/${this.props.language}/about`}
                  onClick={this.closeLanguageSelector}
                >
                  <span>
                    {this.props.language === 'en' ? 'About us' : 'Om oss'}
                  </span>
                </Link>
              </li>
              <li className={styles.languageSelectorDesktop}>
                <Link className={styles.noHover} to={this.changePageLanguage()}>
                  <FontAwesomeIcon icon={['fal', 'globe']} />
                  {this.props.language === 'no' ? 'English' : 'Norsk'}
                </Link>
              </li>
              <li className={styles.languageSelectorMobile}>
                <button onClick={this.toggleLanguageSelector}>
                  <span className="sr-only">Language selector</span>
                  <FontAwesomeIcon icon={['fal', 'globe']} />
                </button>
                <div
                  className={classNames(styles.ulWrapper, {
                    [styles.open]: this.state.languageSelectorOpen,
                  })}
                >
                  <div className={styles.indicator} />
                  <ul>
                    <li
                      className={classNames({
                        [styles.selected]: this.props.language === 'en',
                      })}
                    >
                      <Link
                        to={this.changePageLanguage()}
                        onClick={this.closeLanguageSelector}
                      >
                        <div
                          className={classNames({
                            [styles.selected]: this.props.language === 'en',
                          })}
                        >
                          <FontAwesomeIcon icon="check" />
                        </div>
                        English
                      </Link>
                    </li>
                    <li
                      className={classNames({
                        [styles.selected]: this.props.language === 'no',
                      })}
                    >
                      <Link
                        to={this.changePageLanguage()}
                        onClick={this.closeLanguageSelector}
                      >
                        <div
                          className={classNames({
                            [styles.selected]: this.props.language === 'no',
                          })}
                        >
                          <FontAwesomeIcon icon="check" />
                        </div>
                        Norsk
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className={styles.cookie}>
                <button
                  className={styles.cookieButton}
                  onClick={this.toggleCookieManager}
                >
                  <span className="sr-only">Cookie manager</span>
                  <FontAwesomeIcon icon={['fal', 'cookie-bite']} />
                </button>
                <div
                  className={classNames(styles.cookieManager, {
                    [styles.open]: this.state.cookieManagerOpen,
                  })}
                >
                  <div className={styles.indicator} />
                  <div className={styles.scrollContainer}>
                    <div className={styles.header}>
                      <h4>{cookieInfo.title}</h4>
                      <button
                        className={styles.close}
                        onClick={this.toggleCookieManager}
                      >
                        <span className="sr-only">Close cookie manager</span>
                        <div className={styles.bar} />
                        <div className={styles.bar} />
                      </button>
                    </div>
                    <CookieToggle
                      header={cookieInfo.cookieManager.necessaryCookies.header}
                      text={cookieInfo.cookieManager.necessaryCookies.text}
                      cookies={
                        cookieInfo.cookieManager.necessaryCookies.cookies
                      }
                      id={cookieInfo.cookieManager.necessaryCookies.id}
                      isOn
                      disabled
                      handleToggleButton={this.handleToggleButton}
                      language={this.props.language}
                    />
                    <CookieToggle
                      header={cookieInfo.cookieManager.analyticsCookies.header}
                      text={cookieInfo.cookieManager.analyticsCookies.text}
                      cookies={
                        cookieInfo.cookieManager.analyticsCookies.cookies
                      }
                      id={cookieInfo.cookieManager.analyticsCookies.id}
                      isOn={
                        this.state.useLocalState
                          ? this.state.analyticsIsOn
                          : this.props.analyticsOn
                      }
                      handleToggleButton={this.handleToggleButton}
                      language={this.props.language}
                    />
                    <CookieToggle
                      header={cookieInfo.cookieManager.trackingCookies.header}
                      text={cookieInfo.cookieManager.trackingCookies.text}
                      cookies={cookieInfo.cookieManager.trackingCookies.cookies}
                      id={cookieInfo.cookieManager.trackingCookies.id}
                      isOn={
                        this.state.useLocalState
                          ? this.state.trackingIsOn
                          : this.props.trackingOn
                      }
                      handleToggleButton={this.handleToggleButton}
                      language={this.props.language}
                    />
                    <button
                      onClick={this.saveSettings}
                      className={classNames('textButton', styles.save)}
                    >
                      {cookieInfo.cookieManager.buttonText}
                    </button>
                  </div>
                </div>
                <div
                  className={classNames(styles.cookiePopUp, {
                    [styles.open]: !this.props.hideCookiePopUp,
                  })}
                >
                  <div className={styles.indicator} />
                  <h4>{cookieInfo.title}</h4>
                  <p className="bodySmall">{cookieInfo.cookiePopUp.text}</p>
                  <div className={styles.buttonWrapper}>
                    <button
                      className={classNames('textButton', styles.manage)}
                      onClick={this.closePopUpAndOpenManager}
                    >
                      {cookieInfo.cookiePopUp.manageButtonText}
                    </button>
                    <button
                      className={classNames('textButton', styles.understand)}
                      onClick={this.closeCookiePopUp}
                    >
                      {cookieInfo.cookiePopUp.confirmationButtonText}
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'gatsby-link';
import CookieToggle from '../cookieToggle/index';
import logo from '../../img/logo_oms_hoved.png';
import logoWhite from '../../img/logo_oms_hvit.png';
import styles from './navbar.module.scss';

export default class Navbar extends Component {
  static propTypes = {
    language: PropTypes.string,
    location: PropTypes.shape({ pathname: PropTypes.string }),
    data: PropTypes.shape({
      frontmatter: PropTypes.shape({}),
    }),
    cookieInfo: PropTypes.shape({ frontmatter: PropTypes.shape({}) }),
    showCookiePopUp: PropTypes.bool,
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
    showCookiePopUp: this.props.showCookiePopUp,
    cookieManagerOpen: false,
    languageSelectorOpen: false,
    headerUnderline: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (document != null) {
      if (
        document.body.scrollTop !== 0 ||
        document.documentElement.scrollTop !== 0
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

  closePopUpAndOpenManager = () => {
    this.setState({
      showCookiePopUp: false,
      cookieManagerOpen: true,
    });
    this.props.handleConfirmation(false);
  };

  closeCookiePopUp = () => {
    this.setState({
      showCookiePopUp: false,
    });
    this.props.handleConfirmation(true);
  };

  toggleCookieManager = () => {
    if (this.state.showCookiePopUp === true) {
      this.closePopUpAndOpenManager();
    } else {
      this.setState(prevState => ({
        cookieManagerOpen: !prevState.cookieManagerOpen,
        languageSelectorOpen: false,
      }));
    }
  };

  handleToggleButton = (isOn, id) => {
    this.props.handleCookieChanges(isOn, id);
  };

  toggleLanguageSelector = () => {
    if (this.state.showCookiePopUp === true) {
      this.setState({
        showCookiePopUp: false,
        languageSelectorOpen: true,
      });
      this.props.handleConfirmation(false);
    } else {
      this.setState(prevState => ({
        languageSelectorOpen: !prevState.languageSelectorOpen,
        cookieManagerOpen: false,
      }));
    }
  };

  closeLanguageSelector = () => {
    this.setState({
      languageSelectorOpen: false,
    });
  };

  render() {
    const data = this.props.data.frontmatter;
    const cookieInfo = this.props.cookieInfo.frontmatter;

    const isOnHomePage = this.props.location.pathname.toString().length < 5;
    const navColorWhite = this.state.navOpen ? false : isOnHomePage;

    return (
      <header
        className={`${navColorWhite ? styles.navColorWhite : ''} ${
          this.state.headerUnderline ? styles.headerUnderline : ''
        }`}
      >
        <div className={styles.navbar}>
          <div className={styles.logoWrapper}>
            <Link
              className={`${styles.noHover} ${styles.logo}`}
              to={`/${this.props.language}`}
              onClick={this.closeLanguageSelector}
            >
              <img src={navColorWhite ? logoWhite : logo} alt="Oms logo" />
            </Link>
          </div>
          <nav className={this.state.navOpen ? styles.open : null}>
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
                  <span>{data.numberOfJobVacancies}</span>
                </Link>
              </li>
              <li className={styles.noPaddingRight}>
                <Link
                  activeClassName={styles.active}
                  to={`/${this.props.language}/about`}
                  onClick={this.closeLanguageSelector}
                >
                  {this.props.language === 'en' ? 'About us' : 'Om oss'}
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
                  <FontAwesomeIcon icon={['fal', 'globe']} />
                </button>
                <div
                  className={`${styles.ulWrapper} ${
                    this.state.languageSelectorOpen ? styles.open : styles.hide
                  }`}
                >
                  <div className={styles.indicator} />
                  <ul>
                    <li
                      className={
                        this.props.language === 'en' ? styles.selected : ''
                      }
                    >
                      <Link
                        to={this.changePageLanguage()}
                        onClick={this.closeLanguageSelector}
                      >
                        <div
                          className={
                            this.props.language === 'en' ? styles.selected : ''
                          }
                        >
                          <FontAwesomeIcon icon="check" />
                        </div>
                        English
                      </Link>
                    </li>
                    <li
                      className={
                        this.props.language === 'no' ? styles.selected : ''
                      }
                    >
                      <Link
                        to={this.changePageLanguage()}
                        onClick={this.closeLanguageSelector}
                      >
                        <div
                          className={
                            this.props.language === 'no' ? styles.selected : ''
                          }
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
                  <FontAwesomeIcon icon={['fas', 'adjust']} />
                </button>
                <div
                  className={`${styles.cookieManager} ${
                    this.state.cookieManagerOpen ? styles.open : styles.hide
                  }`}
                >
                  <div className={styles.indicator} />
                  <div className={styles.scrollContainer}>
                    <h4>{cookieInfo.title}</h4>
                    <CookieToggle
                      header={cookieInfo.cookieManager.necessaryCookies.header}
                      text={cookieInfo.cookieManager.necessaryCookies.text}
                      cookies={
                        cookieInfo.cookieManager.necessaryCookies.cookies
                      }
                      isOn
                      disabled
                      handleToggleButton={this.handleToggleButton}
                    />
                    <CookieToggle
                      header={cookieInfo.cookieManager.analyticsCookies.header}
                      text={cookieInfo.cookieManager.analyticsCookies.text}
                      cookies={
                        cookieInfo.cookieManager.analyticsCookies.cookies
                      }
                      isOn={this.props.analyticsOn}
                      handleToggleButton={this.handleToggleButton}
                    />
                    <CookieToggle
                      header={cookieInfo.cookieManager.trackingCookies.header}
                      text={cookieInfo.cookieManager.trackingCookies.text}
                      cookies={cookieInfo.cookieManager.trackingCookies.cookies}
                      isOn={this.props.trackingOn}
                      handleToggleButton={this.handleToggleButton}
                    />
                    <button
                      onClick={this.toggleCookieManager}
                      className={`textButton ${styles.save}`}
                    >
                      {cookieInfo.cookieManager.buttonText}
                    </button>
                  </div>
                </div>
                <div
                  className={`${styles.cookiePopUp} ${
                    this.state.showCookiePopUp || this.props.showCookiePopUp
                      ? styles.open
                      : styles.hide
                  }`}
                >
                  <div className={styles.indicator} />
                  <h4>{cookieInfo.title}</h4>
                  <p className="bodySmall">{cookieInfo.cookiePopUp.text}</p>
                  <div className={styles.buttonWrapper}>
                    <button
                      onClick={this.closePopUpAndOpenManager}
                      className={`textButton ${styles.manage}`}
                    >
                      {cookieInfo.cookiePopUp.manageButtonText}
                    </button>
                    <button
                      onClick={this.closeCookiePopUp}
                      className={`textButton ${styles.understand}`}
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

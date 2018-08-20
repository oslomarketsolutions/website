import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
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
      cookieManagerOpen: true,
    });
    this.props.handleConfirmation(false);
  };

  closeCookiePopUp = () => {
    this.props.handleConfirmation(true);
  };

  toggleCookieManager = () => {
    if (!this.props.hideCookiePopUp) {
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
    if (!this.props.hideCookiePopUp) {
      this.setState({
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
          <div className={styles.logoWrapper}>
            <Link
              className={classNames(styles.noHover, styles.logo)}
              to={`/${this.props.language}`}
              onClick={this.closeLanguageSelector}
            >
              <img src={navColorWhite ? logoWhite : logo} alt="Oms logo" />
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
                  <FontAwesomeIcon icon={['fal', 'cookie-bite']} />
                </button>
                <div
                  className={classNames(styles.cookieManager, {
                    [styles.open]: this.state.cookieManagerOpen,
                  })}
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
                      isOn={this.props.analyticsOn}
                      handleToggleButton={this.handleToggleButton}
                      language={this.props.language}
                    />
                    <CookieToggle
                      header={cookieInfo.cookieManager.trackingCookies.header}
                      text={cookieInfo.cookieManager.trackingCookies.text}
                      cookies={cookieInfo.cookieManager.trackingCookies.cookies}
                      id={cookieInfo.cookieManager.trackingCookies.id}
                      isOn={this.props.trackingOn}
                      handleToggleButton={this.handleToggleButton}
                      language={this.props.language}
                    />
                    <button
                      onClick={this.toggleCookieManager}
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

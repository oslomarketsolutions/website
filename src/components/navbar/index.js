import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'gatsby-link';
import logo from '../../img/logo_oms_hoved.png';
import logoWhite from '../../img/logo_oms_hvit.png';
import styles from './navbar.module.scss';

export default class Navbar extends Component {
  static propTypes = {
    language: PropTypes.string,
    location: PropTypes.shape({ pathname: PropTypes.string }),
  };

  static defaultProps = {
    language: 'en',
  };

  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  state = {
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

  toggleLanguageSelector = () => {
    this.setState(prevState => ({
      languageSelectorOpen: !prevState.languageSelectorOpen,
    }));
  };

  closeLanguageSelector = () => {
    this.setState({
      languageSelectorOpen: false,
    });
  };

  render() {
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
              <li>
                <Link
                  activeClassName={styles.active}
                  to={`/${this.props.language}/career`}
                  onClick={this.closeLanguageSelector}
                >
                  {this.props.language === 'en' ? 'Careers' : 'Jobb'}
                  <span>2</span>
                </Link>
              </li>
              <li>
                <Link
                  activeClassName={styles.active}
                  to={`/${this.props.language}/about`}
                  onClick={this.closeLanguageSelector}
                >
                  {this.props.language === 'en' ? 'About us' : 'Om oss'}
                </Link>
              </li>
              <li
                className={`${styles.languageSelectorDesktop} ${
                  styles.noPaddingRight
                }`}
              >
                <Link to={this.changePageLanguage()}>
                  <FontAwesomeIcon icon="globe" />
                  {this.props.language === 'no' ? 'English' : 'Norsk'}
                </Link>
              </li>
              <li
                className={`${styles.languageSelectorMobile} ${
                  styles.noPaddingRight
                }`}
              >
                <button onClick={this.toggleLanguageSelector}>
                  <FontAwesomeIcon icon="globe" />
                </button>
                <ul
                  className={
                    this.state.languageSelectorOpen ? styles.open : styles.hide
                  }
                >
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
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

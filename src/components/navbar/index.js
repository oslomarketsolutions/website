import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import logo from '../../img/logo_oms_hoved.png';
import logoWhite from '../../img/logo_oms_hvit.png';
// import menuGraph from '../../img/menu_graph.png';
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

  handleScroll(event) {
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
    const headerUnderline = this.state.headerUnderline;

    return (
      <header
        className={`${navColorWhite ? styles.navColorWhite : ''} ${
          headerUnderline ? styles.headerUnderline : ''
        }`}
      >
        <div className={styles.navbar}>
          {/* <Helmet>
            <body className={this.state.navOpen ? styles.noScroll : null} />
          </Helmet> */}
          <Link
            className={`${styles.noHover} ${styles.logo}`}
            to={`/${this.props.language}`}
            /* onClick={this.closeNav} */
          >
            <img src={navColorWhite ? logoWhite : logo} alt="Oms logo" />
          </Link>
          {/* <button
            onClick={this.toggleNav}
            aria-label={
              this.props.language === 'en' ? 'Toggle menu' : 'Åpne/lukke meny'
            }
          >
            <div className={styles.hamburger}>
              <span
                className={this.state.navOpen ? styles.barOpen : styles.bar}
              />
              <span
                className={this.state.navOpen ? styles.barOpen : styles.bar}
              />
              <span
                className={this.state.navOpen ? styles.barOpen : styles.bar}
              />
            </div>
          </button> */}
          <nav className={this.state.navOpen ? styles.open : null}>
            <ul className="navLinks">
              <li>
                <Link
                  activeClassName={styles.active}
                  to={`/${this.props.language}/products`}
                  /* onClick={this.closeNav} */
                >
                  {this.props.language === 'en' ? 'Services' : 'Produkter'}
                </Link>
              </li>
              <li>
                <Link
                  activeClassName={styles.active}
                  to={`/${this.props.language}/career`}
                  /* onClick={this.closeNav} */
                >
                  {this.props.language === 'en' ? 'Careers' : 'Jobb'}
                  <span>2</span>
                </Link>
              </li>
              <li>
                <Link
                  activeClassName={styles.active}
                  to={`/${this.props.language}/about`}
                  /* onClick={this.closeNav} */
                >
                  {this.props.language === 'en' ? 'About us' : 'Om oss'}
                </Link>
              </li>
              {/* <li
                className={`${styles.noPaddingRight} ${styles.borderLeft} ${
                  styles.socialMedia
                }`}
              >
                <OutboundLink
                  href="https://www.linkedin.com/company/oslo-market-solutions-as/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={['fab', 'linkedin']} />
                </OutboundLink>
              </li>
              <li className={`${styles.noPaddingRight} ${styles.socialMedia}`}>
                <OutboundLink
                  href="https://www.facebook.com/oslomarketsolutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={['fab', 'facebook']} />
                </OutboundLink>
              </li>
              <li className={`${styles.noPaddingRight} ${styles.socialMedia}`}>
                <OutboundLink
                  href="https://medium.com/shark-bytes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={['fab', 'medium']} />
                </OutboundLink>
              </li>
              <li className={`${styles.borderRight} ${styles.socialMedia}`}>
                <OutboundLink
                  href="https://github.com/oslomarketsolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={['fab', 'github-square']} />
                </OutboundLink>
              </li> */}
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
                      {/* {this.props.language === 'no' ? 'English' : 'Norsk'} */}
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
            {/* <div className={styles.menuGraph}>
              <img src={menuGraph} alt="Graph in the background" />
            </div> */}
          </nav>
        </div>
      </header>
    );
  }
}

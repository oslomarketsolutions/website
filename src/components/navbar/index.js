import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import logo from '../../img/logo_oms_hoved.png';
import menuGraph from '../../img/menu_graph.png';
import styles from './navbar.module.scss';

export default class Navbar extends Component {
  static propTypes = {
    language: PropTypes.string,
    location: PropTypes.shape({ pathname: {} }),
  };

  static defaultProps = {
    language: 'no',
  };

  state = {
    navOpen: false,
  };

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

  toggleNav = () => {
    this.setState(prevState => ({
      navOpen: !prevState.navOpen,
    }));
  };

  closeNav = () => {
    this.setState({
      navOpen: false,
    });
  };

  render() {
    return (
      <header className={styles.navbar}>
        <Helmet>
          <body className={this.state.navOpen ? styles.noScroll : null} />
        </Helmet>
        <Link
          className={`${styles.noHover} ${styles.logo}`}
          to={`/${this.props.language}`}
          onClick={this.closeNav}
        >
          <img src={logo} alt="Oms logo" />{' '}
        </Link>
        <div
          className={styles.navToggle}
          role="button"
          tabIndex={0}
          onClick={this.toggleNav}
          onKeyUp={this.toggleNav}
        >
          <span className={styles.srOnly}>Toggle nav-menu</span>
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
        </div>
        <nav className={this.state.navOpen ? styles.open : null}>
          <ul>
            <li>
              <Link
                activeClassName={styles.active}
                to={`/${this.props.language}/products`}
                onClick={this.closeNav}
              >
                {this.props.language === 'en' ? 'Products' : 'Produkter'}
              </Link>
            </li>
            <li>
              <Link
                activeClassName={styles.active}
                to={`/${this.props.language}/career`}
                onClick={this.closeNav}
              >
                {this.props.language === 'en' ? 'Work' : 'Jobb'}
              </Link>
            </li>
            <li className={styles.doublePadding}>
              <Link
                activeClassName={styles.active}
                to={`/${this.props.language}/about`}
                onClick={this.closeNav}
              >
                {this.props.language === 'en' ? 'About us' : 'Om oss'}
              </Link>
            </li>
            <li
              className={`${styles.noPaddingRight} ${styles.borderLeft} ${
                styles.socialMedia
              }`}
            >
              <a
                href="https://www.linkedin.com/company/oslo-market-solutions-as/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={['fab', 'linkedin']} />
              </a>
            </li>
            <li className={`${styles.noPaddingRight} ${styles.socialMedia}`}>
              <a
                href="https://www.facebook.com/oslomarketsolutions/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={['fab', 'facebook']} />
              </a>
            </li>
            <li className={`${styles.noPaddingRight} ${styles.socialMedia}`}>
              <a
                href="https://medium.com/shark-bytes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={['fab', 'medium']} />
              </a>
            </li>
            <li className={`${styles.borderRight} ${styles.socialMedia}`}>
              <a
                href="https://github.com/oslomarketsolutions"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={['fab', 'github-square']} />
              </a>
            </li>
            <li className={styles.noPaddingRight}>
              <Link to={this.changePageLanguage()}>
                <FontAwesomeIcon icon="globe" />
                {this.props.language === 'no' ? 'English' : 'Norsk'}
              </Link>
            </li>
          </ul>
          <div className={styles.menuGraph}>
            <img src={menuGraph} alt="Graph in the background" />
          </div>
        </nav>
      </header>
    );
  }
}

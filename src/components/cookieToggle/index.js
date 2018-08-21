import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ToggleButton from '../toggleButton/index';
import styles from './cookieToggle.module.scss';

export default class CookieToggle extends Component {
  static propTypes = {
    header: PropTypes.string,
    text: PropTypes.string,
    cookies: PropTypes.arrayOf(PropTypes.shape({})),
    isOn: PropTypes.bool,
    disabled: PropTypes.bool,
    handleToggleButton: PropTypes.func,
    language: PropTypes.string,
    id: PropTypes.string,
  };

  state = {
    detailsOpen: false,
  };

  toggleDetails = () => {
    this.setState(prevState => ({
      detailsOpen: !prevState.detailsOpen,
    }));
  };

  handleToggleButton = (isOn, id) => {
    this.props.handleToggleButton(isOn, id);
  };

  render() {
    const { header, isOn, disabled, text, cookies, id } = this.props;

    return (
      <div className={styles.cookieToggle}>
        <div className={styles.header}>
          <button className={styles.toggleDetails} onClick={this.toggleDetails}>
            <span className="sr-only">
              Toggle more information about {header}
            </span>
            <FontAwesomeIcon
              className={classNames(styles.chevron, {
                [styles.open]: this.state.detailsOpen,
              })}
              icon={['fas', 'chevron-right']}
            />
            <h6>{header}</h6>
          </button>
          <ToggleButton
            id={id}
            isOn={isOn}
            disabled={disabled}
            handleToggleButton={this.handleToggleButton}
            language={this.props.language}
          />
        </div>
        <p className="bodySmall">{text}</p>
        <div
          className={classNames(styles.tableWrapper, {
            [styles.open]: this.state.detailsOpen,
          })}
        >
          <table className="bodySmall">
            <tbody>
              <tr>
                <th>Name</th>
                <th>Purpose</th>
              </tr>
              {cookies &&
                cookies.map(cookie => (
                  <tr key={cookie.name}>
                    <td>{cookie.name}</td>
                    <td>{cookie.purpose}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

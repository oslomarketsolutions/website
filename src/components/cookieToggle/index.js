import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ToggleButton from '../toggleButton/index';
import styles from './cookieToggle.module.scss';

export default class CookieToggle extends Component {
  static propTypes = {
    header: PropTypes.string,
    isOn: PropTypes.bool,
    disabled: PropTypes.bool,
    handleToggleButton: PropTypes.func,
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
    const { header, isOn, disabled } = this.props;

    return (
      <div className={styles.cookieToggle}>
        <div className={styles.header}>
          <button className={styles.toggleDetails} onClick={this.toggleDetails}>
            <FontAwesomeIcon
              className={`${styles.chevron} ${
                this.state.detailsOpen ? styles.open : ''
              }`}
              icon={['fas', 'chevron-right']}
            />
            <h6>{header}</h6>
          </button>
          <ToggleButton
            id={header}
            isOn={isOn}
            disabled={disabled}
            handleToggleButton={this.handleToggleButton}
          />
        </div>
        <p className="bodySmall">
          These cookies are needed for our website to function providing payment
          gateway security and their essentials. Therefore they are always on
          but do not contain personally indetifiable information (PII).
        </p>
        <div
          className={`${styles.tableWrapper} ${
            this.state.detailsOpen ? styles.open : ''
          }`}
        >
          <table className="bodySmall">
            <tbody>
              <tr>
                <th>Name</th>
                <th>Purpose</th>
              </tr>
              <tr>
                <td>Cookie Example</td>
                <td>
                  These cookies are needed for our website to function providing
                  payment gateway security and their essentials. Therefore they
                  are always on but do not contain personally indetifiable
                  information (PII).
                </td>
              </tr>
              <tr>
                <td>Cookie Example</td>
                <td>
                  These cookies are needed for our website to function providing
                  payment gateway security and their essentials. Therefore they
                  are always on but do not contain personally indetifiable
                  information (PII).
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

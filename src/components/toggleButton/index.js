import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './toggleButton.module.scss';

export default class ToggleButton extends Component {
  static propTypes = {
    id: PropTypes.string,
    isOn: PropTypes.bool,
    disabled: PropTypes.bool,
    handleToggleButton: PropTypes.func,
  };

  toggle = () => {
    this.props.handleToggleButton(!this.props.isOn, this.props.id);
  };

  render() {
    return (
      <div
        className={`${styles.toggleButton} ${
          this.props.isOn ? styles.checked : ''
        } ${this.props.disabled ? styles.disabled : ''}`}
      >
        <label className={styles.tglBtn} htmlFor={this.props.id}>
          <input
            className={`${styles.tgl} ${styles.tglLight}`}
            id={this.props.id}
            type="checkbox"
            onChange={this.toggle}
            checked={this.props.isOn}
            disabled={this.props.disabled}
          />
        </label>
        <span className="textButton">{this.props.isOn ? 'On' : 'Off'}</span>
      </div>
    );
  }
}

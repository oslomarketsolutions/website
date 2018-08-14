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

  state = {
    isOn: this.props.isOn,
  };

  toggle = () => {
    this.setState(
      prevState => ({
        isOn: !prevState.isOn,
      }),
      () => {
        this.props.handleToggleButton(this.state.isOn, this.props.id);
      },
    );
  };

  render() {
    return (
      <div
        className={`${styles.toggleButton} ${
          this.state.isOn ? styles.checked : ''
        } ${this.props.disabled ? styles.disabled : ''}`}
      >
        <label className={styles.tglBtn} htmlFor={this.props.id}>
          <input
            className={`${styles.tgl} ${styles.tglLight}`}
            id={this.props.id}
            type="checkbox"
            onClick={this.toggle}
            defaultChecked={this.props.isOn}
            disabled={this.props.disabled}
          />
        </label>
        <span className="textButton">{this.state.isOn ? 'On' : 'Off'}</span>
      </div>
    );
  }
}

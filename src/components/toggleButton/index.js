import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './toggleButton.module.scss';

export default class ToggleButton extends Component {
  static propTypes = {
    id: PropTypes.string,
    isOn: PropTypes.bool,
    disabled: PropTypes.bool,
    handleToggleButton: PropTypes.func,
    language: PropTypes.string,
  };

  toggle = () => {
    this.props.handleToggleButton(!this.props.isOn, this.props.id);
  };

  render() {
    let OnOrOffText = this.props.isOn ? 'On' : 'Off';
    if (this.props.language === 'no') {
      OnOrOffText = this.props.isOn ? 'På' : 'Av';
    }

    return (
      <div
        className={classNames(styles.toggleButton, {
          [styles.checked]: this.props.isOn,
          [styles.disabled]: this.props.disabled,
        })}
      >
        <label className={styles.tglBtn} htmlFor={this.props.id}>
          <input
            className={styles.tgl}
            id={this.props.id}
            type="checkbox"
            onChange={this.toggle}
            checked={this.props.isOn || false}
            disabled={this.props.disabled}
          />
        </label>
        <span className="textButton">{OnOrOffText}</span>
      </div>
    );
  }
}

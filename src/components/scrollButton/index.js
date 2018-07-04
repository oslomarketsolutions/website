import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

import styles from './scrollButton.module.scss';

export default class ScrollButton extends Component {
  static propTypes = {
    scrollStepInPx: PropTypes.string,
    delayInMs: PropTypes.string,
  };

  state = {
    intervalId: 0,
  };

  scrollStep() {
    if (window != null) {
      if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
      }
      window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }
  }

  scrollToTop() {
    const intervalId = setInterval(
      this.scrollStep.bind(this),
      this.props.delayInMs,
    );
    this.setState({ intervalId });
  }

  render() {
    return (
      <button
        className={styles.button}
        title="Back to top"
        onClick={() => {
          this.scrollToTop();
        }}
        aria-label="Back to top"
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    );
  }
}

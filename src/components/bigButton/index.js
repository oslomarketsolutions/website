import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './bigButton.module.scss';

const BigButton = ({ to, text }) => (
  <a className={classNames('buttonLarge', styles.bigButton)} href={to}>
    {text}
  </a>
);

BigButton.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
};

export default BigButton;

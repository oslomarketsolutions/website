import React from 'react';
import PropTypes from 'prop-types';
import styles from './bigButton.module.scss';

const BigButton = ({ to, text, onClick }) => (
  <a onClick={onClick} className={`buttonLarge ${styles.bigButton}`} href={to}>
    {text}
  </a>
);

BigButton.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default BigButton;

import React from 'react';
import PropTypes from 'prop-types';
import { OutboundLink } from 'react-ga';
import styles from './bigButton.module.scss';

const BigButton = ({ to, text }) => (
  <OutboundLink className={`buttonLarge ${styles.bigButton}`} to={to} eventLabel={to}>
    {text}
  </OutboundLink>
);

BigButton.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default BigButton;

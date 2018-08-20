import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { OutboundLink } from 'react-ga';
import styles from './bigButton.module.scss';

const BigButton = ({ to, text }) => (
  <OutboundLink
    className={classNames('buttonLarge', styles.bigButton)}
    to={to}
    eventLabel={to}
  >
    {text}
  </OutboundLink>
);

BigButton.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
};

export default BigButton;

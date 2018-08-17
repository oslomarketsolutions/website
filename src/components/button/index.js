import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from 'gatsby-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './button.module.scss';

const Button = ({ to, text, useArrow }) => (
  <Link to={to} className={classNames('buttonNormal', styles.button)}>
    {text}
    {useArrow && <FontAwesomeIcon icon={['fas', 'arrow-right']} />}
  </Link>
);

Button.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
  useArrow: PropTypes.bool,
};

export default Button;

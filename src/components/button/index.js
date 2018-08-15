import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './button.module.scss';

const Button = ({ to, text, useArrow, onClick }) => (
  <Link to={to} onClick={onClick} className={`buttonNormal ${styles.button}`}>
    {text}
    {useArrow && <FontAwesomeIcon icon={['fas', 'arrow-right']} />}
  </Link>
);

Button.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
  useArrow: PropTypes.bool,
  onClick: PropTypes.bool,
};

export default Button;

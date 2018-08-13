import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './cookieToggle.module.scss';

const CookieToggle = ({ to, text, useArrow }) => (
  <Link to={to} className={`buttonNormal ${styles.button}`}>
    {text}
    {useArrow && <FontAwesomeIcon icon={['fas', 'arrow-right']} />}
  </Link>
);

CookieToggle.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
  useArrow: PropTypes.bool,
};

export default CookieToggle;

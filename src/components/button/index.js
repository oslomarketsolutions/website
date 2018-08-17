import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './button.module.scss';

const Button = ({ to, text, useArrow, outBound }) => {
  const button = outBound ? (
    <OutboundLink href={to} className={`buttonNormal ${styles.button}`}>
      {text}
      {useArrow && <FontAwesomeIcon icon={['fas', 'arrow-right']} />}
    </OutboundLink>
  ) : (
    <Link to={to} className={`buttonNormal ${styles.button}`}>
      {text}
      {useArrow && <FontAwesomeIcon icon={['fas', 'arrow-right']} />}
    </Link>
  );
  return <React.Fragment>{button}</React.Fragment>;
};

Button.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
  useArrow: PropTypes.bool,
  outBound: PropTypes.bool,
};

export default Button;

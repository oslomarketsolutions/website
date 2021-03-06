import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from 'gatsby-link';
import { OutboundLink } from 'react-ga';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './button.module.scss';

const Button = ({ to, text, useArrow, outBound }) => {
  const button = outBound ? (
    <OutboundLink
      to={to}
      eventLabel={to}
      className={classNames('buttonNormal', styles.button)}
    >
      {text}
      {useArrow && <FontAwesomeIcon icon={['fas', 'arrow-right']} />}
    </OutboundLink>
  ) : (
    <Link to={to} className={classNames('buttonNormal', styles.button)}>
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

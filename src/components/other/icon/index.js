import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Icon = props => (
  <i className={classNames('fa', props.type)} aria-hidden="true" />
);

Icon.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Icon;

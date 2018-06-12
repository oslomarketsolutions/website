import React from 'react';
import PropTypes from 'prop-types';

import logo from '../img/github-icon.svg';

const EmployeeCard = props => {
  const { name, position, description } = props;

  const cardStyle = {
    border: '1px solid #eaecee',
    padding: '2em 4em',
    width: '80%',
    textAlign: 'center',
    boxShadow: '3px 3px 4px',
  };

  const imageStyle = {
    width: 'auto',
    height: '200px',
  };

  return (
    <div className="content" style={cardStyle}>
      <img src={logo} alt="Just the Github-logo" style={imageStyle} />
      <h1>{name}</h1>
      <h2>{position}</h2>
      <p>{description}</p>
    </div>
  );
};

EmployeeCard.propTypes = {
  name: PropTypes.string,
  position: PropTypes.string,
  description: PropTypes.string,
};

export default EmployeeCard;

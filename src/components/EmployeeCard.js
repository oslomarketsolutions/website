import React from 'react';
import PropTypes from 'prop-types';
import './EmployeeCard.css';

const EmployeeCard = props => {
  const { name, position, description, image } = props;

  return (
    <div className="employeeCard">
      <div>
        <img src={image} alt="Stockphoto of a girl smiling" />
      </div>

      <div className="employeeTextContainer" style={{ flex: 1 }}>
        <div className="employeeHeader">
          <h2 id="employeeName">{name}</h2>
          <h3 id="employeePosition">{position}</h3>
          <p id="employeeIcon">ICON</p>
        </div>

        <div className="employeeFooter">
          <p id="employeeDescription">{description}</p>
        </div>
      </div>
    </div>
  );
};

EmployeeCard.propTypes = {
  name: PropTypes.string,
  position: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default EmployeeCard;

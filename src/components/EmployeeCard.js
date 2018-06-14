import React from 'react';
import PropTypes from 'prop-types';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee';
import './EmployeeCard.css';

// only temp
import pic from '../../static/img/janne.jpg';

const EmployeeCard = props => {
  const { name, position, description, image } = props;

  return (
    <div className="employeeCard">
      <div>
        <img src={pic} alt="Stockphoto of a girl smiling" />
      </div>

      <div className="employeeTextContainer" style={{ flex: 1 }}>
        <div className="employeeHeader">
          <h2 id="employeeName">{name}</h2>
          <h3 id="employeePosition">{position}</h3>
          <FontAwesomeIcon icon={faCoffee} id="employeeIcon" />
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

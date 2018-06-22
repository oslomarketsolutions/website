import React from 'react';
import PropTypes from 'prop-types';
import EmployeeCard from '../../components/employeesCard';

const EmployeePreview = ({ entry, widgetFor }) => {
  return <EmployeeCard name={entry.getIn(['data', 'title'])} />;
};

EmployeePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default EmployeePreview;

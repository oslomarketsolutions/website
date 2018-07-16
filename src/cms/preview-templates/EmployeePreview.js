import React from 'react';
import PropTypes from 'prop-types';
import EmployeeCard from '../../components/employeesCard';

const EmployeePreview = ({ entry, getAsset }) => (
  <EmployeeCard
    name={entry.getIn(['data', 'title'])}
    jobTitle={entry.getIn(['data', 'jobTitle'])}
    description={entry.getIn(['data', 'description'])}
    image={getAsset(entry.getIn(['data', 'image']))}
    jobType={entry.getIn(['data', 'jobType'])}
  />
);

EmployeePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default EmployeePreview;

import React from 'react';
import PropTypes from 'prop-types';
import EmployeeCard from '../../components/employeesCard';

const EmployeePreview = ({ entry, widgetFor }) => (
  <EmployeeCard
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

EmployeePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default EmployeePreview;

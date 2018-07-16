import React from 'react';
import PropTypes from 'prop-types';
import EmployeeCard from '../../components/employeesCard';
import PreviewWrapper from '../../components/previewWrapper';

const EmployeePreview = ({ entry }) => (
  <PreviewWrapper>
    <EmployeeCard
      name={entry.getIn(['data', 'title'])}
      jobTitle={entry.getIn(['data', 'jobTitle'])}
      description={entry.getIn(['data', 'description'])}
      image={entry.getIn(['data', 'image'])}
      jobType={entry.getIn(['data', 'jobType'])}
    />
  </PreviewWrapper>
);

EmployeePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default EmployeePreview;

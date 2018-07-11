import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './EmployeeCard.module.scss';

const iconMatcher = jobType => {
  switch (jobType) {
    case 'operations':
      return ['fas', 'server'];

    case 'backEnd':
      return ['fas', 'coffee'];

    case 'frontEnd':
      return ['fas', 'flask'];

    case 'summerIntern':
      return ['fas', 'graduation-cap'];

    default:
      return ['fas', 'user-secret'];
  }
};

const EmployeeCard = props => {
  const { name, jobTitle, description, image, jobType } = props;
  return (
    <section className={styles.EmployeeCard}>
      <img src={image} alt={name} />
      <section className={styles.header}>
        <h3>{name}</h3>
        <h4>{jobTitle}</h4>
        <figure>
          <FontAwesomeIcon icon={iconMatcher(jobType)} size="3x" />
        </figure>
      </section>
      <section className={styles.description}>
        <p>{description}</p>
      </section>
    </section>
  );
};

EmployeeCard.propTypes = {
  name: PropTypes.string,
  jobTitle: PropTypes.string,
  jobType: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default EmployeeCard;

import React from 'react';
import PropTypes from 'prop-types';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import faGraduationCap from '@fortawesome/fontawesome-free-solid/faGraduationCap';
import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee';
import faFlask from '@fortawesome/fontawesome-free-solid/faFlask';
import faUserSecret from '@fortawesome/fontawesome-free-solid/faUserSecret';

import styles from './EmployeeCard.module.scss';

const iconMatcher = jobType => {
  switch (jobType) {
    case 'backEnd':
      return faCoffee;

    case 'frontEnd':
      return faFlask;

    case 'summerIntern':
      return faGraduationCap;

    default:
      return faUserSecret;
  }
};

const EmployeeCard = props => {
  const { name, jobTitle, description, image, jobType } = props;
  return (
    <section className={styles.EmployeeCard}>
      <img src={image} alt={name} />
      <section className={styles.header}>
        <h2>{name}</h2>
        <h3>{jobTitle}</h3>
        <figure>
          <FontAwesomeIcon icon={iconMatcher(jobType)} size="md" />
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

import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../other/icon';

import styles from './EmployeeCard.module.scss';

// ESLinter didn't like break statements in switch since they "can't" be reached
const iconMatcher = jobType => {
  switch (jobType) {
    case 'backEnd':
      return 'fa-gears';

    case 'frontEnd':
      return 'fa-flask';

    case 'summerIntern':
      return 'fa-graduation-cap';

    default:
      return 'fa-user-secret';
  }
};

const EmployeeCard = props => {
  const { name, jobTitle, description, image, jobType } = props;
  return (
    <article className={styles.EmployeeCard}>
      <img src={image} alt={name} />
      <section className={styles.header}>
        <h2>{name}</h2>
        <h3>{jobTitle}</h3>
        <Icon type={iconMatcher(jobType)} />
      </section>
      <section className={styles.description}>
        <p>{description}</p>
      </section>
    </article>
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

import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../other/icon';

import styles from './EmployeeCard.module.scss';

const EmployeeCard = props => {
  const { name, jobTitle, description, image, jobType } = props;
  return (
    <article className={styles.EmployeeCard}>
      <img src={image} alt="Stockphoto of a girl smiling" />
      <section className={styles.header}>
        <h2>{name}</h2>
        <h3>{jobTitle}</h3>
        <Icon type={iconFinder(jobType)} />
      </section>
      <section className={styles.description}>
        <p>{description}</p>
      </section>
    </article>
  );
};

// TODO: Return a random icon from a few selected for each role
const iconFinder = jobType => {
  switch (jobType) {
    case 'backEnd':
      return 'fa-gears';
      break;

    case 'frontEnd':
      return 'fa-flask';
      break;

    case 'summerIntern':
      return 'fa-graduation-cap';
      break;

    default:
      return 'fa-user-secret';
      break;
  }
};

EmployeeCard.propTypes = {
  name: PropTypes.string,
  jobTitle: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default EmployeeCard;

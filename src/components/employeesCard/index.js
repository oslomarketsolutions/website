import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../other/icon';

import styles from './EmployeeCard.module.scss';

// only temp

const EmployeeCard = props => {
  const { name, position, description, image } = props;
  return (
    <article className={styles.EmployeeCard}>
      <img src={image} alt="Stockphoto of a girl smiling" />
      <section className={styles.header}>
        <h2>{name}</h2>
        <h3>{position}</h3>
        <Icon type="fa-user-secret" />
      </section>
      <section className={styles.description}>
        <p>{description}</p>
      </section>
    </article>
  );
};

EmployeeCard.propTypes = {
  name: PropTypes.string,
  position: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default EmployeeCard;

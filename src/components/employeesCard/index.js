import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

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
  const {
    name,
    jobTitle,
    description,
    portraitSize,
    headerBackgroundSize,
    jobType,
  } = props;
  return (
    <section className={styles.EmployeeCard}>
      <Img
        outerWrapperClassName={styles.imageContainer}
        style={{ height: '100%', width: '100%' }}
        sizes={portraitSize}
      />
      <section className={styles.header}>
        <h3>{name}</h3>
        <h4>{jobTitle}</h4>
        <figure>
          <FontAwesomeIcon icon={iconMatcher(jobType)} size="3x" />
        </figure>
        {/* Background-image for header */}
        <Img
          outerWrapperClassName={styles.headerBackground}
          style={{ height: '100%', width: '100%' }}
          imgStyle={{ height: '200%', width: '200%' }}
          sizes={headerBackgroundSize}
        />
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
  portraitSize: PropTypes.arrayOf(PropTypes.object),
  headerBackgroundSize: PropTypes.arrayOf(PropTypes.object),
};

export default EmployeeCard;

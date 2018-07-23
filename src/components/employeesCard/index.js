import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ImageWrapper from '../imageWrapper';
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
  const { name, jobTitle, description, portraitSize, jobType, image } = props;
  return (
    <section className={styles.EmployeeCard}>
      <ImageWrapper
        outerWrapperClassName={styles.imageContainer}
        style={{ gridArea: 'image' }}
        sizes={portraitSize}
        src={image}
        alt={name}
      />
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
  portraitSize: PropTypes.shape({
    aspectRatio: PropTypes.number,
    base64: PropTypes.string,
    sizes: PropTypes.string,
    src: PropTypes.string,
    srcSet: PropTypes.string,
  }),
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default EmployeeCard;

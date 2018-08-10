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
      return ['fas', 'cogs'];

    case 'frontEnd':
      return ['fas', 'code'];

    case 'designer':
      return ['fas', 'paint-brush'];

    case 'summerIntern':
      return ['fas', 'graduation-cap'];

    case 'support':
      return ['fas', 'fire-extinguisher'];

    default:
      return ['fas', 'briefcase'];
  }
};

const EmployeeCard = props => {
  const { name, jobTitle, description, jobType, portraitSize, image } = props;
  return (
    <div className={styles.EmployeeCard}>
      <div className={styles.imageAndIconContainer}>
        <ImageWrapper
          outerWrapperClassName={styles.imageContainer}
          sizes={portraitSize}
          src={image}
          alt={name}
        />
        <div className={styles.iconContainer}>
          <FontAwesomeIcon icon={iconMatcher(jobType)} />
        </div>
      </div>

      <div className={styles.header}>
        <h3>{name}</h3>
        <h4>{jobTitle}</h4>
      </div>
      <div className={styles.description}>
        <p>{description}</p>
      </div>
    </div>
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

import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ImageWrapper from '../imageWrapper';
import styles from './EmployeeCard.module.scss';

const iconMatcher = jobType => {
  switch (jobType) {
    case 'operations':
      return ['far', 'server'];

    case 'backEnd':
      return ['far', 'cogs'];

    case 'frontEnd':
      return ['far', 'code'];

    case 'designer':
      return ['far', 'pencil-ruler'];

    case 'summerIntern':
      return ['far', 'graduation-cap'];

    case 'support':
      return ['far', 'fire-extinguisher'];

    default:
      return ['far', 'briefcase'];
  }
};

const EmployeeCard = props => {
  const { name, jobTitle, description, jobType, resolutions, image } = props;
  return (
    <div className={styles.employeeCard}>
      <div className={styles.imageAndIconContainer}>
        <ImageWrapper
          outerWrapperClassName={styles.imageContainer}
          resolutions={resolutions}
          src={image}
          alt={name}
        />
        <div className={styles.iconContainer}>
          <FontAwesomeIcon icon={iconMatcher(jobType)} />
        </div>
      </div>

      <div className={styles.header}>
        <h4>{name}</h4>
        <p>{jobTitle}</p>
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
  resolutions: PropTypes.shape({
    aspectRatio: PropTypes.number,
    base64: PropTypes.string,
    sizes: PropTypes.string,
    src: PropTypes.string,
    srcSet: PropTypes.string,
  }),
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default EmployeeCard;

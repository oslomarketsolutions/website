import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './contactCard.module.scss';
import ImageWrapper from '../imageWrapper/index';

const ContactCard = ({
  title,
  visitingAddress,
  phoneNumber,
  mailAddress,
  sizes,
  image,
}) => (
  <div className={styles.contactCard}>
    <h2>{title}</h2>
    <ImageWrapper
      outerWrapperClassName={styles.imageContainer}
      sizes={sizes}
      src={image}
      alt={title}
    />
    <ul>
      <li>
        <FontAwesomeIcon icon={['fas', 'map-pin']} />
        {visitingAddress}
      </li>
      <li>
        <FontAwesomeIcon icon={['fas', 'phone']} />
        {phoneNumber}
      </li>
      <li>
        <FontAwesomeIcon icon={['fas', 'envelope']} />
        {mailAddress}
      </li>
    </ul>
  </div>
);

ContactCard.propTypes = {
  title: PropTypes.string,
  visitingAddress: PropTypes.string,
  phoneNumber: PropTypes.string,
  mailAddress: PropTypes.string,
  sizes: PropTypes.shape({}),
  image: PropTypes.string,
};

export default ContactCard;

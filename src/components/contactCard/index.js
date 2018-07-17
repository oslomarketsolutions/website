import React from 'react';
import PropTypes from 'prop-types';
import styles from './contactCard.module.scss';
import ImageWrapper from '../imageWrapper';

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
      <li>{visitingAddress}</li>
      <li>{phoneNumber}</li>
      <li>{mailAddress}</li>
    </ul>
  </div>
);

ContactCard.propTypes = {
  title: PropTypes.string,
  visitingAddress: PropTypes.string,
  phoneNumber: PropTypes.string,
  mailAddress: PropTypes.string,
  sizes: PropTypes.arrayOf(PropTypes.object),
  image: PropTypes.string,
};

export default ContactCard;

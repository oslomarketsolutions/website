import React from 'react';
import PropTypes from 'prop-types';
import styles from './perkCard.module.scss';

const PerkCard = ({ title, text }) => (
  <div className={styles.perkCard}>
    <h4>{title}</h4>
    <p>{text}</p>
  </div>
);

PerkCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

export default PerkCard;

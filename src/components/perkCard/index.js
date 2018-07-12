import React from 'react';
import PropTypes from 'prop-types';
import styles from './perkCard.module.scss';

const PerkCard = ({ title, text, color }) => (
  <div className={styles.perkCard} style={{ borderColor: color }}>
    <h4>{title}</h4>
    <p>{text}</p>
  </div>
);

PerkCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.string,
};

export default PerkCard;

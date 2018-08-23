import React from 'react';
import PropTypes from 'prop-types';
import styles from './perkCard.module.scss';

const PerkCard = ({ title, text, icon }) => (
  <div className={styles.perkCard}>
    <div className={styles.header}>
      {icon ? (
        <div className={styles.iconContainer}>
          <img src={icon} alt={icon} />
        </div>
      ) : (
        <div />
      )}

      <h4>{title}</h4>
    </div>
    <div className={styles.description}>
      <p>{text}</p>
    </div>
  </div>
);

PerkCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.arrayOf(PropTypes.string),
};

export default PerkCard;

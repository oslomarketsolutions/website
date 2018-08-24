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
    <p>{text}</p>
  </div>
);

PerkCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
};

export default PerkCard;

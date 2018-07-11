import React from 'react';
import PropTypes from 'prop-types';
import styles from './perkCard.module.scss';

const PerkCard = ({ title, text, color }) => (
  <section className={styles.perkCard} style={{ borderColor: color }}>
    <h3>{title}</h3>
    <p>{text}</p>
  </section>
);

PerkCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.string,
};

export default PerkCard;

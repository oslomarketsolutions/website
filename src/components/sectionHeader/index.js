import React from 'react';
import PropTypes from 'prop-types';
import styles from './sectionHeader.module.scss';

const SectionHeader = ({ header, subHeader, text }) => (
  <section className={styles.sectionHeader}>
    <h1>{header}</h1>
    <p className="subtitle">{subHeader}</p>
    <p className="bodyLarge">{text}</p>
  </section>
);

SectionHeader.propTypes = {
  header: PropTypes.string,
  subHeader: PropTypes.string,
  text: PropTypes.string,
};

export default SectionHeader;

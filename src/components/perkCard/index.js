import React from 'react';
import PropTypes from 'prop-types';
import Content, { HTMLContent } from '../../components/Content';
import styles from './perkCard.module.scss';

const PerkCard = ({ content, title }) => {
  const PageContent = HTMLContent || Content;

  return (
    <section className={styles.perkCard}>
      <PageContent content={content} />
    </section>
  );
};

PerkCard.propTypes = {
  content: PropTypes.string,
  title: PropTypes.string,
};

export default PerkCard;

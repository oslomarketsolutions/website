import React from 'react';
import PropTypes from 'prop-types';
import Content, { HTMLContent } from '../../components/Content';
import styles from './perkCard.module.scss';

const PerkCard = ({ content, color }) => {
  const PageContent = HTMLContent || Content;

  return (
    <div className={styles.perkCard} style={{ borderColor: color }}>
      <PageContent content={content} />
    </div>
  );
};

PerkCard.propTypes = {
  content: PropTypes.string,
  color: PropTypes.string,
};

export default PerkCard;

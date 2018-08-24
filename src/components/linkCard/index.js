import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from 'gatsby-link';
import styles from './linkCard.module.scss';

const LinkCard = ({
  header,
  id,
  description,
  isDark,
  icon,
  onClickFunction,
  linkText,
}) => (
  <div
    className={classNames(styles.linkCard, {
      [styles.dark]: isDark,
    })}
  >
    <Link to={`#${id}`} onClick={event => onClickFunction(event, id)}>
      <div className={styles.header}>
        <div className={styles.iconWrapper}>
          <div className={styles.icon}>
            <img src={icon} alt={header} />
          </div>
        </div>
        <h3>{header}</h3>
      </div>
      <p>{description}</p>
      <div className={classNames('textButton', styles.link)}>{linkText}</div>
    </Link>
    <Link
      className={classNames('textButton', styles.mobileLink)}
      to={`#${id}`}
      onClick={event => onClickFunction(event, id)}
    >
      <div className={styles.iconWrapper}>
        <div className={styles.icon}>
          <img src={icon} alt={header} />
        </div>
      </div>
      <h3 className="linkCardTitle">{header}</h3>
    </Link>
  </div>
);

export default LinkCard;

LinkCard.propTypes = {
  header: PropTypes.string,
  id: PropTypes.string,
  description: PropTypes.string,
  linkText: PropTypes.string,
  isDark: PropTypes.bool,
  icon: PropTypes.string,
  onClickFunction: PropTypes.func,
};

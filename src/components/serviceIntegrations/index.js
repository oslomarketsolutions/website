import React from 'react';
import PropTypes from 'prop-types';
import { findImageSizes } from '../../utils/helperFunctions';
import ImageWrapper from '../../components/imageWrapper';
import styles from './serviceIntegrations.module.scss';

const ServiceIntegrations = ({ header, text, logos, imageSizes }) => (
  <section className={styles.serviceIntegrations}>
    <h2>{header}</h2>
    <p>{text}</p>
    <div className={styles.integrationLogos}>
      {logos &&
        logos.map(logo => (
          <ImageWrapper
            key={logo.name}
            src={logo.logo}
            alt={logo.name}
            sizes={findImageSizes(logo.logo, imageSizes)}
            outerWrapperClassName={styles.imageContainer}
          />
        ))}
    </div>
  </section>
);

export default ServiceIntegrations;

ServiceIntegrations.propTypes = {
  header: PropTypes.string,
  text: PropTypes.string,
  logos: PropTypes.string,
  imageSizes: PropTypes.arrayOf(PropTypes.object),
};

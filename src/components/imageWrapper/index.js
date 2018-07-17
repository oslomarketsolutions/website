import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styles from './ImageWrapper.module.scss';

const ImageWrapper = props => {
  const {
    src,
    sizes,
    resolutions,
    alt,
    outerWrapperClassName,
    style,
    imgStyle,
  } = props;

  if (resolutions || sizes) {
    return (
      <Img
        outerWrapperClassName={outerWrapperClassName}
        style={style}
        className={styles.innerImageWrapper}
        imgStyle={imgStyle}
        resolutions={resolutions}
        sizes={sizes}
        alt={alt}
      />
    );
  }

  return (
    <div className={outerWrapperClassName}>
      <div className={styles.innerImageWrapper} style={style}>
        <img
          src={src}
          alt={alt}
          style={{ height: '100%', width: '100%', objectFit: 'cover' }}
        />
      </div>
    </div>
  );
};

ImageWrapper.propTypes = {
  src: PropTypes.string,
  sizes: PropTypes.arrayOf(PropTypes.object),
  resolutions: PropTypes.arrayOf(PropTypes.object),
  alt: PropTypes.string,
  outerWrapperClassName: PropTypes.string,
  style: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  }),
  imgStyle: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  }),
};

export default ImageWrapper;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageWrapper from '../../components/imageWrapper';
import { findImageSizes } from '../../utils/helperFunctions';

export default class Images extends Component {
  static propTypes = {
    alt: PropTypes.string,
    outerWrapperClassName: PropTypes.string,
    desktopSrc: PropTypes.string,
    tabletSrc: PropTypes.string,
    mobileSrc: PropTypes.string,
    sizes: PropTypes.arrayOf(PropTypes.shape({})),
  };

  constructor(props) {
    super(props);
    this.handleResize = this.handleResize.bind(this);
  }

  state = {
    desktop: true,
    tablet: false,
    mobile: false,
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    if (window.innerWidth < 768) {
      this.setState({
        desktop: false,
        tablet: false,
        mobile: true,
      });
    } else if (window.innerWidth < 1173) {
      this.setState({
        desktop: false,
        tablet: true,
        mobile: false,
      });
    } else {
      this.setState({
        desktop: true,
        tablet: false,
        mobile: false,
      });
    }
  }

  render() {
    const {
      alt,
      outerWrapperClassName,
      desktopSrc,
      tabletSrc,
      mobileSrc,
      sizes,
    } = this.props;
    return (
      <React.Fragment>
        {this.state.desktop && (
          <ImageWrapper
            src={desktopSrc}
            alt={alt}
            sizes={findImageSizes(desktopSrc, sizes)}
            outerWrapperClassName={outerWrapperClassName}
          />
        )}
        {this.state.tablet && (
          <ImageWrapper
            src={tabletSrc}
            alt={alt}
            sizes={findImageSizes(tabletSrc, sizes)}
            outerWrapperClassName={outerWrapperClassName}
          />
        )}
        {this.state.mobile && (
          <ImageWrapper
            src={mobileSrc}
            alt={alt}
            sizes={findImageSizes(mobileSrc, sizes)}
            outerWrapperClassName={outerWrapperClassName}
          />
        )}
      </React.Fragment>
    );
  }
}

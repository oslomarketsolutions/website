import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './slider.module.scss';

export default class Slider extends Component {
  static propTypes = {
    logos: PropTypes.arrayOf(PropTypes.shape({})),
  };

  constructor(props) {
    super(props);

    this.array = [];
    this.slidesArray = [];

    for (let i = 0; i < this.props.logos.length; i += 1) {
      this.array.push(this.props.logos[i]);

      if ((i + 1) % 6 === 0 || i + 1 === this.props.logos.length) {
        this.slidesArray.push(this.array);
        this.array = [];
      }
    }
  }

  state = {
    slideCount: 0,
  };

  handleDotClick = i => {
    this.setState({
      slideCount: i,
    });
  };

  render() {
    return (
      <div className={styles.slider}>
        {this.slidesArray &&
          this.slidesArray.map((slide, i) => (
            <Slide
              key={slide[0].name}
              array={this.slidesArray[i]}
              i={i}
              slideCount={this.state.slideCount}
            />
          ))}
        <Dots
          dotClick={this.handleDotClick}
          slides={this.slidesArray}
          i={this.state.slideCount}
        />
      </div>
    );
  }
}

const Slide = ({ array, i, slideCount }) => {
  const active = i === slideCount;
  return (
    <div
      className={`${styles.slideContainer} ${active ? styles.slideActive : ''}`}
    >
      {array &&
        array.map(logo => (
          <img key={logo.name} alt={logo.name} src={logo.logo} />
        ))}
    </div>
  );
};

Slide.propTypes = {
  i: PropTypes.number,
  slideCount: PropTypes.number,
  array: PropTypes.arrayOf(PropTypes.shape({})),
};

const Dots = ({ dotClick, slides, i }) => (
  <div className={styles.dots}>
    {slides &&
      slides.map((slide, index) => {
        const active = i === index;
        return (
          <Dot
            key={slide[0].name}
            id={index}
            active={active}
            dotClick={dotClick}
          />
        );
      })}
  </div>
);

Dots.propTypes = {
  dotClick: PropTypes.func,
  slides: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))),
  i: PropTypes.number,
};

const Dot = ({ id, active, dotClick }) => (
  <button
    className={`${styles.dot} ${active ? styles.active : ''}`}
    onClick={() => dotClick(id)}
  />
);

Dot.propTypes = {
  dotClick: PropTypes.func,
  active: PropTypes.bool,
  id: PropTypes.number,
};

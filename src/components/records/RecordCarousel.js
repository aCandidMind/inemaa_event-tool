import React, {Component} from 'react';
import Carousel from 'nuka-carousel';
import Record from './Record';

const decorators = [
  {
    component: function() {
      if (!this._carousel) { return null; }
      return (
        <button className="slide-button slide-prev" onClick={this._carousel.previousSlide}>
          <span className="fa fa-arrow-left" />
        </button>
      )
    },
    position: 'CenterLeft',
  },
  {
    component: function() {
      if (!this._carousel) { return null; }
      return (
        <button className="slide-button slide-next" onClick={this._carousel.nextSlide}>
          <span className="fa fa-arrow-right" />
        </button>
      )
    },
    position: 'CenterRight',
  },
];

class RecordCarousel extends Component {

  constructor(props) {
    super(props);
    decorators.forEach(decorator => {
       decorator.component = decorator.component.bind(this);
    });
  }

  render() {
    return (
      <Carousel
        slidesToShow={3}
        slidesToScroll={1}
        initialSlideHeight={288}
        cellSpacing={20}
        decorators={decorators}
        ref={(c) => this._carousel = c}
      >
        {this.props.records}
      </Carousel>
    );
  }
}

export default RecordCarousel;

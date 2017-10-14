import React, {Component} from 'react';
import Carousel from 'nuka-carousel';

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
        swiping={true}
        cellSpacing={20}
        decorators={decorators}
        ref={(c) => this._carousel = c}
      >
        <div className="cell">
          <img src="http://placehold.it/400x288?text=1" />
        </div>
        <div className="cell">
          <img src="http://placehold.it/400x288?text=2" />
        </div>
        <div className="cell">
          <img src="http://placehold.it/400x288?text=3" />
        </div>
        <div className="cell">
          <img src="http://placehold.it/400x288?text=4" />
        </div>
      </Carousel>
    );
  }
}

export default RecordCarousel;

import React, {Component} from 'react';
import Carousel from 'nuka-carousel';

function getDecorators() {
  return [
    {
      component: function(props) {
        if (!this._carousel) { return null; }
        let classNames = "slide-button slide-prev";
        if (props.currentSlide === 0) {
          classNames += ' inactive';
        }
        return (
          <button className={classNames} onClick={this._carousel.previousSlide}>
            <span className="fa fa-arrow-left" />
          </button>
        )
      },
      position: 'CenterLeft',
    },
    {
      component: function(props) {
        if (!this._carousel) { return null; }
        let classNames = "slide-button slide-next";
        if (props.currentSlide + props.slidesToScroll >= props.slideCount - props.slidesToShow + 1) {
          classNames += ' inactive';
        }
        return (
          <button className={classNames} onClick={this._carousel.nextSlide}>
            <span className="fa fa-arrow-right" />
          </button>
        )
      },
      position: 'CenterRight',
    },
  ];
};

class RecordCarousel extends Component {

  constructor(props) {
    super(props);
    this.decorators = getDecorators();
    this.decorators.forEach(decorator => {
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
        decorators={this.decorators}
        ref={(c) => this._carousel = c}
      >
        {this.props.records}
      </Carousel>
    );
  }
}

export default RecordCarousel;

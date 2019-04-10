import React from 'react'
import Arrow from './svg/arrow'
import Messsage from './svg/message'

class BlogSlider extends React.Component {
  state = {
    slide: 1
  };

  render() {
    return (
      <div className="blog__slder__cover">
        <div className="container">
          <div className="blog__slider">
            <div className="blog__slider__controls">
              <div className="blog__slider__controls__left" onClick={this.slidePrevious}>
                <Arrow/>
              </div>
              <div className="blog__slider__controls__right" onClick={this.slideNext}>
                <Arrow/>
              </div>
            </div>
            <div className={this.getClass2(1)}>
              <div className="blog__slider__slide__image">
                <Messsage/>
              </div>
              <div className="blog__slider__slide__content">
                <div className="blog__slider__slide__about">
                  <p className="blog__slider__slide__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Deleniti dolor dolore eveniet hic possimus reprehenderit, velit? Accusantium cupiditate deserunt,
                    dolore dolores dolorum et fugit hic officiis quo reprehenderit, unde vero.</p>
                </div>
                <div className="blog__slider__slide__bottom">
                  <div className="blog__slider__slide__line"></div>
                  <div className="blog__slider__slide__author">
                    <p className="blog__slider__slide__author__text">Jon Doe</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={this.getClass2(2)}>
              <div className="blog__slider__slide__image">
                <Messsage/>
              </div>
              <div className="blog__slider__slide__content">
                <div className="blog__slider__slide__about">
                  <p className="blog__slider__slide__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, aliquid assumenda aut dicta dolorem dolorum explicabo inventore iure labore minima nam numquam officia quam, qui quod, ut voluptatibus. Adipisci, commodi.</p>
                </div>
                <div className="blog__slider__slide__bottom">
                  <div className="blog__slider__slide__line"></div>
                  <div className="blog__slider__slide__author">
                    <p className="blog__slider__slide__author__text">Jon Doe2</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={this.getClass2(3)}>
              <div className="blog__slider__slide__image">
                <Messsage/>
              </div>
              <div className="blog__slider__slide__content">
                <div className="blog__slider__slide__about">
                  <p className="blog__slider__slide__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur error id impedit inventore non sint soluta tenetur vel. Ab dolore doloremque esse est eum eveniet laborum minima obcaecati totam!</p>
                </div>
                <div className="blog__slider__slide__bottom">
                  <div className="blog__slider__slide__line"></div>
                  <div className="blog__slider__slide__author">
                    <p className="blog__slider__slide__author__text">Jon Doe3</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  slideNext = () => this.state.slide === 3 ? this.setState({ slide: 1 }) : this.setState({ slide: this.state.slide + 1 });
  slidePrevious = () => this.state.slide === 1 ? this.setState({ slide: 3 }) : this.setState({ slide: this.state.slide - 1 });
  getClass2 = (num) => this.state.slide === num ? "blog__slider__slide blog__slider__slide_active" : "blog__slider__slide";
}


export default BlogSlider
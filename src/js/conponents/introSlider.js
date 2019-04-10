import React from 'react'
import Arrow from "./svg/arrow";

class IntroSlider extends React.Component {
  state = {
    slide: 1
  };
  render() {
    return (
      <div className="container">
        <div className="intro__slider">
          <div className="intro__slider__controls">
            <div className="intro__slider__controls__left" onClick={this.slideLeft}>
              <Arrow/>
            </div>
            <div className="intro__slider__controls__right" onClick={this.slideRight}>
              <Arrow/>
            </div>
          </div>
          <div className="intro__slider__slides">
            <div className={this.getClass(1)}>
              <div className="intro__slide__image">
                <img src={require("../../img/introFace.png")} alt="person comment" className="intro__slide__pic"/>
              </div>
              <div className="intro__slide__content">
                <div className="intro__slide__content_about">
                  <p className="intro__slide__content__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti distinctio dolore enim excepturi iusto odio porro quaerat quas tempora voluptate.</p>
                </div>
                <div className="intro__slide__content__bottom">
                  <div className="intro__slide__content__line"></div>
                  <div className="intro__slide__content__author">Joshua Earle</div>
                </div>
              </div>
            </div>
            <div className={this.getClass(2)}>
              <div className="intro__slide__image">
                <img src={require("../../img/introFace.png")} alt="person comment" className="intro__slide__pic"/>
              </div>
              <div className="intro__slide__content">
                <div className="intro__slide__content_about">
                  <p className="intro__slide__content__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti distinctio dolore enim excepturi iusto odio porro quaerat quas tempora voluptate.</p>
                </div>
                <div className="intro__slide__content__bottom">
                  <div className="intro__slide__content__line"></div>
                  <div className="intro__slide__content__author">Joshua Earle2</div>
                </div>
              </div>
            </div>
            <div className={this.getClass(3)}>
              <div className="intro__slide__image">
                <img src={require("../../img/introFace.png")} alt="person comment" className="intro__slide__pic"/>
              </div>
              <div className="intro__slide__content">
                <div className="intro__slide__content_about">
                  <p className="intro__slide__content__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti distinctio dolore enim excepturi iusto odio porro quaerat quas tempora voluptate.</p>
                </div>
                <div className="intro__slide__content__bottom">
                  <div className="intro__slide__content__line"></div>
                  <div className="intro__slide__content__author">Joshua Earle3</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  slideLeft = () => this.state.slide == 1 ? this.setState({slide: 3}) : this.setState({slide: this.state.slide-1});
  slideRight = () => this.state.slide == 3 ? this.setState({slide: 1}) : this.setState({slide: this.state.slide+1});
  getClass = (num ) => this.state.slide == num ? "intro__slide intro__slide_active" : "intro__slide"
}

export default IntroSlider
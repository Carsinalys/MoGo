import React from 'react'

import Arrow from './svg/arrow'
import Picture from './svg/picture'
import Target from './svg/target'
import Equalizer from './svg/equalizer'

class BlogInfo extends React.Component {
  state = {
    first: false,
    second: false,
    third: false
  };
  render() {
    return (
      <div className="container">
        <section className="blog__about">
          <div className="blog__about__image">
            <img src={require("../../img/blog.jpg")} alt="" className="blog__about__pic"/>
          </div>
          <div className="blog__about__right">
            <div className="blog__about__right__foto">
              <div className="blog__about__right__text__cover">
                <Picture/>
                <p className="blog__about__right__text" onClick={this.handleShowFirst}>Photography</p>
                <div className={this.state.first == true ? "blog__arrow__creative blog__arrow__creative_active" : "blog__arrow__creative"}>
                  <Arrow/>
                </div>
              </div>
              <div className={this.state.first == true ? "blog__about__right__hidden__cover blog__about__right__hidden__cover_active" : "blog__about__right__hidden__cover"}>
                <p className="blog__about__right__hidden">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, in laudantium nostrum odio perferendis quam sint veniam! A, consectetur earum ipsam iste molestiae necessitatibus odit, provident repellat reprehenderit sed similique soluta temporibus? Ab nam praesentium veniam! Dignissimos distinctio dolore doloremque dolorum ipsam nam necessitatibus nisi non officia officiis, praesentium, quia repellat sapiente sint suscipit totam voluptas? A ad animi asperiores consectetur corporis debitis deleniti dignissimos doloremque doloribus dolorum ducimus eius error eum facere harum illo ipsum itaque laudantium magnam maxime minus nulla odit omnis optio quo recusandae repellendus, soluta tempore temporibus ullam! Autem, beatae fugiat iste minus quasi veritatis voluptatum.</p>
              </div>
            </div>
            <div className="blog__about__right__foto">
              <div className="blog__about__right__text__cover">
                <Equalizer/>
                <p className="blog__about__right__text" onClick={this.handleShowSecond}>creativity</p>
                <div className={this.state.second == true ? "blog__arrow__creative blog__arrow__creative_active" : "blog__arrow__creative"}>
                  <Arrow/>
                </div>
              </div>
              <div className={this.state.second == true ? "blog__about__right__hidden__cover blog__about__right__hidden__cover_active" : "blog__about__right__hidden__cover"}>
                <p className="blog__about__right__hidden">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cupiditate harum laudantium libero nam natus nesciunt possimus quidem sit, voluptates.</p>
              </div>
            </div>
            <div className="blog__about__right__foto">
              <div className="blog__about__right__text__cover">
                <Target/>
                <p className="blog__about__right__text" onClick={this.handleShowThird}>web design</p>
                <div className={this.state.third == true ? "blog__arrow__creative blog__arrow__creative_active" : "blog__arrow__creative"}>
                  <Arrow/>
                </div>
              </div>
              <div className={this.state.third == true ? "blog__about__right__hidden__cover blog__about__right__hidden__cover_active" : "blog__about__right__hidden__cover"}>
                <p className="blog__about__right__hidden">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cupiditate harum laudantium libero nam natus nesciunt possimus quidem sit, voluptates.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  handleShowFirst = () =>  this.state.first == true ? this.setState({ first: false, second: false, third: false }) : this.setState({ first: true, second: false, third: false });
  handleShowSecond = () => this.state.second == true ? this.setState({ first: false, second: false, third: false }) : this.setState({ first: false, second: true, third: false });
  handleShowThird = () => this.state.third == true ? this.setState({ first: false, second: false, third: false }) : this.setState({ first: false, second: false, third: true });



}

export default BlogInfo
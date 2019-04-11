import React from 'react'
import Eye from './svg/eye'
import Speech from './svg/speech'
import { connect } from "react-redux";
import like from '../AC/index'

class StoriesList extends React.Component {
  render() {
    return (
      <ul className="stories__list">
        <li className="stories__item">
          <div className="stories__image">
            <a href="#" className="stories__link">
              <img src={require("../../img/storiesPic1.jpg")} alt="story" className="stories__pic"/>
              <div className="stories__date">
                <span className="stories__date__num">15</span>
                <span className="stories__date__mounth">Jan</span>
              </div>
            </a>
          </div>
          <div className="stories__content">
            <p className="stories__content__title">Lorem ipsum dolor sit amet</p>
            <p className="stories__content__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, magnam?</p>
            <span className="stories__content__line"></span>
            <div className="stories__content__info">
              <div className="stories__content__info__wathes">
                <Eye/>
                <span className="stories__content__info__wathes__num">542</span>
              </div>
              <div className="stories__content__info__comments">
                <Speech/>
                <span className="stories__content__info__comments__num">17</span>
              </div>
            </div>
          </div>
        </li>
        <li className="stories__item">
          <div className="stories__image">
            <a href="#" className="stories__link">
              <img src={require("../../img/storiesPic2.jpg")} alt="story" className="stories__pic"/>
              <div className="stories__date">
                <span className="stories__date__num">14</span>
                <span className="stories__date__mounth">Jan</span>
              </div>
            </a>
          </div>
          <div className="stories__content">
            <p className="stories__content__title">Lorem ipsum dolor sit amet</p>
            <p className="stories__content__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, magnam?</p>
            <span className="stories__content__line"></span>
            <div className="stories__content__info">
              <div className="stories__content__info__wathes">
                <Eye/>
                <span className="stories__content__info__wathes__num">992</span>
              </div>
              <div className="stories__content__info__comments">
                <Speech/>
                <span className="stories__content__info__comments__num">42</span>
              </div>
            </div>
          </div>
        </li>
        <li className="stories__item">
          <div className="stories__image">
            <a href="#" className="stories__link">
              <img src={require("../../img/storiesPic3.jpg")} alt="story" className="stories__pic"/>
              <div className="stories__date">
                <span className="stories__date__num">12</span>
                <span className="stories__date__mounth">Jan</span>
              </div>
            </a>
          </div>
          <div className="stories__content">
            <p className="stories__content__title">Lorem ipsum dolor sit amet</p>
            <p className="stories__content__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, magnam?</p>
            <span className="stories__content__line"></span>
            <div className="stories__content__info">
              <div className="stories__content__info__wathes">
                <Eye/>
                <span className="stories__content__info__wathes__num" onClick={this.counter}>{this.props.number}</span>
              </div>
              <div className="stories__content__info__comments">
                <Speech/>
                <span className="stories__content__info__comments__num">98</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    )
  }
  counter = ()=> this.props.like(2);
}

export default connect((state) => {
  return {
    number: state.count
  }
}, {like})(StoriesList)
import React from 'react'

import Watch from './svg/watch'
import Graph from './svg/graph'
import Computer from './svg/computer'
import Book from './svg/book'
import Home from './svg/home'
import Square from './svg/square'


class ListPowers extends React.Component {
  render() {
    return (
      <div className="container">
        <section className="work__list">
          <div className="work__list__top">
            <div className="power">
              <div className="power__image">
                <Watch/>
              </div>
              <div className="power__text">
                <p className="power__text__title">Photography</p>
                <p className="power__text__discription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet consectetur dolorem doloribus ea eius maxime, mollitia nisi obcaecati sed.</p>
              </div>
            </div>
            <div className="power">
              <div className="power__image">
                <Graph/>
              </div>
              <div className="power__text">
                <p className="power__text__title">Web Design</p>
                <p className="power__text__discription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque excepturi facilis ipsum, libero modi natus porro quisquam rerum vero voluptate.</p>
              </div>
            </div>
            <div className="power">
              <div className="power__image">
                <Computer/>
              </div>
              <div className="power__text">
                <p className="power__text__title">Creativity</p>
                <p className="power__text__discription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cupiditate dolorum facilis magnam natus nihil quaerat, quam quod vel voluptates.</p>
              </div>
            </div>
          </div>
          <div className="work__powers__line"></div>
          <div className="work__list__bottom">
            <div className="power">
              <div className="power__image">
                <Book/>
              </div>
              <div className="power__text">
                <p className="power__text__title">SEO</p>
                <p className="power__text__discription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur delectus esse et exercitationem expedita ipsa ipsam obcaecati quisquam! Consequatur, quo?</p>
              </div>
            </div>
            <div className="power">
              <div className="power__image">
                <Home/>
              </div>
              <div className="power__text">
                <p className="power__text__title">Css/Html</p>
                <p className="power__text__discription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti impedit minima non possimus. Alias dolorum inventore ipsam iure soluta?</p>
              </div>
            </div>
            <div className="power">
              <div className="power__image">
                <Square/>
              </div>
              <div className="power__text">
                <p className="power__text__title">digital</p>
                <p className="power__text__discription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid nobis recusandae rerum sapiente tempore. Amet earum illum rem reprehenderit suscipit.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default ListPowers
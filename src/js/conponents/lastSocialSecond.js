import React from 'react'

class LastSocialSecond extends React.Component {
  render() {
    return (
      <div className="social__second">
        <p className="social__second__title">blogs</p>
        <ul className="social__second__list">
          <li className="social__second__item">
            <a href="#" className="social__second__link">
              <div className="social__second__image">
                <img src={require("../../img/lastBlogs1.jpg")} alt="blogs" className="social__second__pic"/>
              </div>
              <div className="social__second__about">
                <p className="social__second__about__title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <p className="social__second__about__text">Jan 9, 2016</p>
              </div>
            </a>
          </li>
          <li className="social__second__item">
            <a href="#" className="social__second__link">
              <div className="social__second__image">
                <img src={require("../../img/lastBlogs2.jpg")} alt="blogs" className="social__second__pic"/>
              </div>
              <div className="social__second__about">
                <p className="social__second__about__title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <p className="social__second__about__text">Jan 9, 2016</p>
              </div>
            </a>
            </li>
          <li className="social__second__item">
            <a href="#" className="social__second__link">
              <div className="social__second__image">
                <img src={require("../../img/lastBlogs3.jpg")} alt="blogs" className="social__second__pic"/>
              </div>
              <div className="social__second__about">
                <p className="social__second__about__title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <p className="social__second__about__text">Jan 9, 2016</p>
              </div>
            </a>
            </li>
        </ul>
      </div>
    )
  }
}

export default LastSocialSecond
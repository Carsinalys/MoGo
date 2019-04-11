import React from 'react'

import Facebook from './svg/facebook'
import Twitter from './svg/twitter'
import Instagram from './svg/instagram'
import Pinterest from './svg/pinterest'
import GooglePlus from './svg/googlePlus'
import Youtube from './svg/youtube'
import Dribbble from './svg/dribbble'
import Tumblr from './svg/tumblr'

class LastSocialFirst extends React.Component {
  render() {
    return (
      <div className="social__first">
        <div className="social__first__about">
          <h3 className="social__first__about__title">MoGo</h3>
          <p className="social__first__about__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur ea eius incidunt ipsa officiis omnis quos voluptatem. Accusamus alias atque eveniet officia omnis placeat provident qui, repudiandae suscipit vel.</p>
          <p className="social__first__about__follow"><span className="social__first__about__follw__num">15k</span>followers</p>
          <span className="social__first__about__line"></span>
        </div>
        <div className="social__first__networks">
          <p className="social__first__networks__text">Follow Us:</p>
          <ul className="social__first__networks__list">
            <li className="social__first__networks__link"><a href="#" className="social__first__networks__link"><Facebook/></a>
            </li>
            <li className="social__first__networks__link"><a href="#" className="social__first__networks__link"><Twitter/></a>
            </li>
            <li className="social__first__networks__link"><a href="#" className="social__first__networks__link"><Instagram/></a>
            </li>
            <li className="social__first__networks__link"><a href="#" className="social__first__networks__link"><Pinterest/></a>
            </li>
            <li className="social__first__networks__link"><a href="#" className="social__first__networks__link"><GooglePlus/></a>
            </li>
            <li className="social__first__networks__link"><a href="#" className="social__first__networks__link"><Youtube/></a>
            </li>
            <li className="social__first__networks__link"><a href="#" className="social__first__networks__link"><Dribbble/></a>
            </li>
            <li className="social__first__networks__link"><a href="#" className="social__first__networks__link"><Tumblr/></a>
            </li>
          </ul>
        </div>
        <div className="social__first__sunscribe">
          <input type="text" className="social__first__sunscribe__mail" placeholder="Your Email..."/>
          <button className="social__first__sunscribe__submit">Subscribe</button>
        </div>
      </div>
    )
  }
}

export default LastSocialFirst
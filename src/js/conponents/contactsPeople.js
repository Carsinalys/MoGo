import React from 'react'

import Pinterest from './svg/pinterest'
import Facebook from './svg/facebook'
import Instagram from './svg/instagram'
import Twitter from './svg/twitter'

class ContactsPeople extends React.Component {
  render() {
    return (
      <div className="container">
        <ul className="contacts__list">
          <li className="contacts__item">
            <div className="contacts__item__image">
              <img src={require("../../img/contacts_photo1.jpg")} alt="" className="contacts__item__pic"/>
              <div className="contacts__item__image__hover">
                <ul className="contacts__item__image__hover__list">
                  <li className="contacts__item__image__hover__item">
                    <a href="#" className="contacts__item__image__hover__link">
                      <Facebook/>
                    </a>
                  </li>
                  <li className="contacts__item__image__hover__item">
                    <a href="#" className="contacts__item__image__hover__link">
                      <Twitter/>
                    </a>
                  </li>
                  <li className="contacts__item__image__hover__item">
                    <a href="#" className="contacts__item__image__hover__link">
                      <Pinterest/>
                    </a>
                  </li>
                  <li className="contacts__item__image__hover__item">
                    <a href="#" className="contacts__item__image__hover__link">
                      <Instagram/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="contacts__item__about">
              <p className="contacts__item__about__name">Matthew Dix</p>
              <p className="contacts__item__about__ability">Graphic Design</p>
            </div>
          </li>
          <li className="contacts__item">
            <div className="contacts__item__image">
              <img src={require("../../img/contacts_photo2.jpg")} alt="" className="contacts__item__pic"/>
              <div className="contacts__item__image__hover">
                <ul className="contacts__item__image__hover__list">
                  <li className="contacts__item__image__hover__item">
                    <a href="#" className="contacts__item__image__hover__link">
                      <Facebook/>
                    </a>
                  </li>
                  <li className="contacts__item__image__hover__item">
                    <a href="#" className="contacts__item__image__hover__link">
                      <Twitter/>
                    </a>
                  </li>
                  <li className="contacts__item__image__hover__item">
                    <a href="#" className="contacts__item__image__hover__link">
                      <Pinterest/>
                    </a>
                  </li>
                  <li className="contacts__item__image__hover__item">
                    <a href="#" className="contacts__item__image__hover__link">
                      <Instagram/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="contacts__item__about">
              <p className="contacts__item__about__name">Christopher Campbell</p>
              <p className="contacts__item__about__ability">Branding/UX design</p>
            </div>
          </li>
          <li className="contacts__item">
            <div className="contacts__item__image">
              <img src={require("../../img/contacts_photo3.jpg")} alt="" className="contacts__item__pic"/>
              <div className="contacts__item__image__hover">
                <ul className="contacts__item__image__hover__list">
                  <li className="contacts__item__image__hover__item">
                    <a href="#" className="contacts__item__image__hover__link">
                      <Facebook/>
                    </a>
                  </li>
                  <li className="contacts__item__image__hover__item">
                    <a href="#" className="contacts__item__image__hover__link">
                      <Twitter/>
                    </a>
                  </li>
                  <li className="contacts__item__image__hover__item">
                    <a href="#" className="contacts__item__image__hover__link">
                      <Pinterest/>
                    </a>
                  </li>
                  <li className="contacts__item__image__hover__item">
                    <a href="#" className="contacts__item__image__hover__link">
                      <Instagram/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="contacts__item__about">
              <p className="contacts__item__about__name">Michael Fertig </p>
              <p className="contacts__item__about__ability">Developer</p>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default ContactsPeople
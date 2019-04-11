import React from 'react'
import LastSocialFirst from './lastSocialFirst'
import LastSocialSecond from './lastSocialSecond'
import LastSocialThird from './lastSocialThird'

class LastSocial extends React.Component {
  render() {
    return (
      <div className="container">
        <section className="social">
          <LastSocialFirst/>
          <LastSocialSecond/>
          <LastSocialThird/>
        </section>
        <div className="social__line"></div>
        <div className="social__footer">
          <p className="social__footer__text">&#169; 2016 MoGo free PSD template by <span className="social__footer__text_red">Laaqiq</span></p>
        </div>
      </div>
    )
  }
}

export default LastSocial
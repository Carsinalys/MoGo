import React from 'react'

class LastSocialThird extends React.Component {
  render() {
    return (
      <div className="social__third">
        <h5 className="social__third___title">instagram</h5>
        <ul className="social__third__list">
          <li className="social__third__item"><a href="#" className="social__third__link">
            <img src={require("../../img/lastINSTAGRAM1.jpg")} alt="" className="social__third__pic"/>
          </a></li>
          <li className="social__third__item"><a href="#" className="social__third__link">
            <img src={require("../../img/lastINSTAGRAM2.jpg")} alt="" className="social__third__pic"/>
          </a></li>
          <li className="social__third__item"><a href="#" className="social__third__link">
            <img src={require("../../img/lastINSTAGRAM3.jpg")} alt="" className="social__third__pic"/>
          </a></li>
          <li className="social__third__item"><a href="#" className="social__third__link">
            <img src={require("../../img/lastINSTAGRAM4.jpg")} alt="" className="social__third__pic"/>
          </a></li>
          <li className="social__third__item"><a href="#" className="social__third__link">
            <img src={require("../../img/lastINSTAGRAM5.jpg")} alt="" className="social__third__pic"/>
          </a></li>
          <li className="social__third__item"><a href="#" className="social__third__link">
            <img src={require("../../img/lastINSTAGRAM6.jpg")} alt="" className="social__third__pic"/>
          </a></li>
          <li className="social__third__item"><a href="#" className="social__third__link">
            <img src={require("../../img/lastINSTAGRAM7.jpg")} alt="" className="social__third__pic"/>
          </a></li>
          <li className="social__third__item"><a href="#" className="social__third__link">
            <img src={require("../../img/lastINSTAGRAM8.jpg")} alt="" className="social__third__pic"/>
          </a></li>
          <li className="social__third__item"><a href="#" className="social__third__link">
            <img src={require("../../img/lastINSTAGRAM9.jpg")} alt="" className="social__third__pic"/>
          </a></li>
        </ul>
        <a href="#" className="social__third__link">View more photos</a>
      </div>
    )
  }
}

export default LastSocialThird
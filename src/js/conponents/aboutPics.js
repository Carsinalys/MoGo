import React from 'react'

import Users from './svg/users'

export default class AboutPics extends React.Component {
  state = {
    firstClass: "about__pics__item",
    secondClass: "about__pics__item",
    thirdClass: "about__pics__item"
  };
  render() {
    return (
      <div className="about__pics">
        <ul className="about__pics__list">
          <li className={this.state.firstClass} onMouseOver={this.handleHover1} onMouseLeave={this.handleLeave1}>
            <a href="#" className="about__pics__link">
              <img src={require("../../img/about1.jpg")} alt="" className="about__pics__pic"/>
            </a>
            <div className="about__pics__hover">
              <Users/>
              <p className="about__pics__hover__text">super team</p>
            </div>
          </li>
          <li className={this.state.secondClass} onMouseOver={this.handleHover2} onMouseLeave={this.handleLeave2}>
            <a href="#" className="about__pics__link">
              <img src={require("../../img/about2.jpg")} alt="" className="about__pics__pic"/>
            </a>
            <div className="about__pics__hover">
              <Users/>
              <p className="about__pics__hover__text">super team</p>
            </div>
          </li>
          <li className={this.state.thirdClass} onMouseOver={this.handleHover3} onMouseLeave={this.handleLeave3}>
            <a href="#" className="about__pics__link">
              <img src={require("../../img/about3.jpg")} alt="" className="about__pics__pic"/>
            </a>
            <div className="about__pics__hover">
              <Users/>
              <p className="about__pics__hover__text">super team</p>
            </div>
          </li>
        </ul>
      </div>
    )
  }

  handleHover1 = () => {this.setState({firstClass: "about__pics__item about__pics__item_active"})};
  handleLeave1 = () => {this.setState({firstClass: "about__pics__item"})};
  handleHover2 = () => {this.setState({secondClass: "about__pics__item about__pics__item_active"})};
  handleLeave2 = () => {this.setState({secondClass: "about__pics__item"})};
  handleHover3 = () => {this.setState({thirdClass: "about__pics__item about__pics__item_active"})};
  handleLeave3 = () => {this.setState({thirdClass: "about__pics__item"})};
}
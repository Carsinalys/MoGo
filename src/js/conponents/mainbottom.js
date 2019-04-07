import React from 'react'
import {connect} from 'react-redux'

class Bottom extends React.Component {
  render() {
    return (
      <div className="container">
        <nav className="nav__bottom">
          <ul className="nav__bottom__list">
            <li className="nav__bottom__item">
              <a href="#" className={this.props.number == 1 ? "nav__bottom_link nav__bottom_link_active" : "nav__bottom_link nav__bottom_link_active1-2 black_theme nav__bottom_link_dark"}><span className="nav__bottoom__number">01</span>intro</a>
            </li>
            <li className="nav__bottom__item">
              <a href="#" className={this.props.number == 1 ? "nav__bottom_link " : "nav__bottom_link black_theme nav__bottom_link_dark"}><span className="nav__bottoom__number">02</span>work</a>
            </li>
            <li className="nav__bottom__item">
              <a href="#" className={this.props.number == 1 ? "nav__bottom_link" : "nav__bottom_link black_theme nav__bottom_link_dark"}><span className="nav__bottoom__number">03</span>about</a>
            </li>
            <li className="nav__bottom__item">
              <a href="#" className={this.props.number == 1 ? "nav__bottom_link" : "nav__bottom_link black_theme nav__bottom_link_dark"}><span className="nav__bottoom__number">04</span>contacts</a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
  handleClass = () => {
    return this.props.number == 1 ? "nav__bottom_link" : "nav__bottom_link black_theme"
  }
}

export default connect((state)=>({
  number: state.page
}))(Bottom)
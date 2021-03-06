import React from 'react'
import {connect} from 'react-redux'

class Bottom extends React.Component {
  render() {
    return (
      <div className="container">
        <nav className="nav__bottom">
          <ul className="nav__bottom__list">
            <li className="nav__bottom__item">
              <a href="#" className={this.handleClass(1,6)} onClick={this.handleHomePage}><span className="nav__bottoom__number">01</span>intro</a>
            </li>
            <li className="nav__bottom__item">
              <a href="#" className={this.handleClass(1,7)} onClick={this.handleWorkPage}><span className="nav__bottoom__number">02</span>work</a>
            </li>
            <li className="nav__bottom__item">
              <a href="#" className={this.handleClass(1,8)} onClick={this.handleStoriesPage}><span className="nav__bottoom__number">03</span>about</a>
            </li>
            <li className="nav__bottom__item">
              <a href="#" className={this.handleClass(1,9)} onClick={this.handleLastPage}><span className="nav__bottoom__number">04</span>contacts</a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
  handleHomePage = ()=> this.props.dispatch({type: "intro"});
  handleWorkPage = ()=> this.props.dispatch({type: "bottomWork"});
  handleStoriesPage = ()=> this.props.dispatch({type: "stories"});
  handleLastPage = ()=> this.props.dispatch({type: "last"});
  handleClass = (num1, num2) => {
    if (this.props.number == num1) {return "nav__bottom_link"}
    else if (this.props.number == num2) {return "nav__bottom_link black_theme nav__bottom_link_dark nav__bottom_link_active1-2"}
    else {return "nav__bottom_link black_theme nav__bottom_link_dark"}
  }
}

export default connect((state)=>({
  number: state.page
}))(Bottom)
import React from 'react'
import Cart from './svg/cart'
import Search from './svg/search'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {about} from '../AC/index'
import {main} from '../AC/index'


class Mainnav extends React.Component {
  static propTypes = {
    pageNumber: PropTypes.number.isRequired
  };
  render() {
    return (
      <div className="container container_first_theme">
        <div className="logo">
          <p className="logo__text">MoGO</p>
        </div>
        <nav className="nav">
          <div className="nav__links">
            <ul className="nav__links_list">
              <li className="nav__links__item"><a href="#" className="nav__links__link nav__links__link_active" onClick={this.handleMainPage} >about</a></li>
              <li className="nav__links__item"><a href="#" className="nav__links__link" onClick={this.handleAboutPage}>servise</a></li>
              <li className="nav__links__item"><a href="#" className="nav__links__link">work</a></li>
              <li className="nav__links__item"><a href="#" className="nav__links__link">blog</a></li>
              <li className="nav__links__item"><a href="#" className="nav__links__link">contact</a></li>
            </ul>
          </div>
          <div className="nav__images">
            <ul className="nav__images__list">
              <li className="nav__images__item"><a href="#" className="nav__images__link"><Cart/></a></li>
              <li className="nav__images__item"><a href="#" className="nav__images__link"><Search/></a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
  handleMainPage = ()=>{
          this.props.dispatch({type: 'main'});
          console.log(this.props)
  };
  handleAboutPage = ()=>{
    this.props.dispatch({type: 'about'});
    console.log(this.props)
  }
}

export default connect((state)=>({
  pageNumber: state.page
}))(Mainnav)
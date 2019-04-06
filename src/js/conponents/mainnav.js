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
          <p className={this.getClassLogo()}>MoGO</p>
        </div>
        <nav className="nav">
          <div className="nav__links">
            <ul className="nav__links_list">
              <li className="nav__links__item"><a href="#" className={this.props.pageNumber == 1 ? "nav__links__link nav__links__link_active" : "nav__links__link black_theme"} onClick={this.handleMainPage} >about</a></li>
              <li className="nav__links__item"><a href="#" className={this.props.pageNumber == 2 ? "nav__links__link nav__links__link_active black_theme" : "nav__links__link  "} onClick={this.handleAboutPage}>servise</a></li>
              <li className="nav__links__item"><a href="#" className={this.props.pageNumber == 2 ? "nav__links__link  black_theme" : "nav__links__link  "}>work</a></li>
              <li className="nav__links__item"><a href="#" className={this.props.pageNumber == 2 ? "nav__links__link  black_theme" : "nav__links__link  "}>blog</a></li>
              <li className="nav__links__item"><a href="#" className={this.props.pageNumber == 2 ? "nav__links__link  black_theme" : "nav__links__link  "}>contact</a></li>
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

  getClassLogo = () => this.props.pageNumber == 1 ? "logo__text" : "logo__text black_theme";



  handleMainPage = ()=>{
          this.props.dispatch({type: 'main'});
  };
  handleAboutPage = ()=>{
          this.props.dispatch({type: 'about'});
  }
}

export default connect((state)=>({
  pageNumber: state.page
}))(Mainnav)
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
      <div className={this.getMarginMenu()}>
        <div className="logo">
          <p className={this.getClassLogo()}>MoGO</p>
        </div>
        <nav className="nav">
          <div className="nav__links">
            <ul className="nav__links_list">
              <li className="nav__links__item"><a href="#" className={this.props.pageNumber == 1 ? "nav__links__link nav__links__link_active" : "nav__links__link black_theme"} onClick={this.handleMainPage} >about</a></li>
              <li className="nav__links__item"><a href="#" className={this.getClassAbout(1,2)} onClick={this.handleAboutPage}>servise</a></li>
              <li className="nav__links__item"><a href="#" className={this.getClassAbout(1,3)} onClick={this.handleWorkPage}>work</a></li>
              <li className="nav__links__item"><a href="#" className={this.getClassAbout(1,4)} onClick={this.handleBlogPage}>blog</a></li>
              <li className="nav__links__item"><a href="#" className={this.getClassAbout(1,5)} onClick={this.handleContactsPage}>contact</a></li>
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

  getMarginMenu = () => this.props.pageNumber == 7 || this.props.pageNumber == 8 || this.props.pageNumber == 9 ? "container container_first_theme container_second_theme" : "container container_first_theme"

  getClassAbout = (num1, num2) => {
          if (this.props.pageNumber == num1) {return "nav__links__link"}
          else if (this.props.pageNumber == num2) {return "nav__links__link nav__links__link_active black_theme"}
          else {return "nav__links__link black_theme"}

  };

  getClassLogo = () => this.props.pageNumber == 1 ? "logo__text" : "logo__text black_theme";

  handleMainPage = ()=>  this.props.dispatch({type: 'main'});
  handleAboutPage = ()=>  this.props.dispatch({type: 'about'});
  handleWorkPage = ()=> this.props.dispatch({type: 'work'});
  handleBlogPage = () => this.props.dispatch({type: 'blog'});
  handleContactsPage = () => this.props.dispatch({type: 'contacts'});
}

export default connect((state)=>({
  pageNumber: state.page
}))(Mainnav)
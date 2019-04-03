import React from 'react'
import Cart from './svg/cart'
import Search from './svg/search'


class Mainnav extends React.Component {
  render() {
    return (
      <div className="container container_first_theme">
        <div className="logo">
          <p className="logo__text">MoGO</p>
        </div>
        <nav className="nav">
          <div className="nav__links">
            <ul className="nav__links_list">
              <li className="nav__links__item"><a href="#" className="nav__links__link nav__links__link_active">about</a></li>
              <li className="nav__links__item"><a href="#" className="nav__links__link">servise</a></li>
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
}

export default Mainnav;
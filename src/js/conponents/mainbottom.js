import React from 'react'

export default class Bottom extends React.Component{
  render() {
    return (
      <div className="container">
        <nav className="nav__bottom">
          <ul className="nav__bottom__list">
            <li className="nav__bottom__item">
              <a href="#" className="nav__bottom_link nav__bottom_link_active"><span className="nav__bottoom__number">01</span>intro</a>
            </li>
            <li className="nav__bottom__item">
              <a href="#" className="nav__bottom_link"><span className="nav__bottoom__number">02</span>work</a>
            </li>
            <li className="nav__bottom__item">
              <a href="#" className="nav__bottom_link"><span className="nav__bottoom__number">03</span>about</a>
            </li>
            <li className="nav__bottom__item">
              <a href="#" className="nav__bottom_link"><span className="nav__bottoom__number">04</span>contacts</a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
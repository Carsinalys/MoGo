import React from 'react'

class BottomWorkClients extends React.Component {
  render() {
    return (
      <section className="clients">
        <ul className="clients__list">
          <li className="clients__item">
            <div className="clients__image">
              <img src={require("../../img/aboutBottomUser1.png")} alt="user" className="clients__pic"/>
            </div>
            <div className="clients__info">
              <p className="clients__info__name">Matthew Dix</p>
              <p className="clients__info__ability">Graphic Design</p>
              <span className="clients__info__line"></span>
              <p className="clients__info__discription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae cupiditate dolore, excepturi illo ipsum iure laudantium similique suscipit velit voluptas.</p>
            </div>
          </li>
          <li className="clients__item">
            <div className="clients__image">
              <img src={require("../../img/aboutBottomUser2.png")} alt="user" className="clients__pic"/>
            </div>
            <div className="clients__info">
              <p className="clients__info__name">Matthew Dix</p>
              <p className="clients__info__ability">Graphic Design</p>
              <span className="clients__info__line"></span>
              <p className="clients__info__discription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae cupiditate dolore, excepturi illo ipsum iure laudantium similique suscipit velit voluptas.</p>
            </div>
          </li>
          <li className="clients__item">
            <div className="clients__image">
              <img src={require("../../img/aboutBottomUser3.png")} alt="user" className="clients__pic"/>
            </div>
            <div className="clients__info">
              <p className="clients__info__name">Matthew Dix</p>
              <p className="clients__info__ability">Graphic Design</p>
              <span className="clients__info__line"></span>
              <p className="clients__info__discription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae cupiditate dolore, excepturi illo ipsum iure laudantium similique suscipit velit voluptas.</p>
            </div>
          </li>
          <li className="clients__item">
            <div className="clients__image">
              <img src={require("../../img/aboutBottomUser4.png")} alt="user" className="clients__pic"/>
            </div>
            <div className="clients__info">
              <p className="clients__info__name">Matthew Dix</p>
              <p className="clients__info__ability">Graphic Design</p>
              <span className="clients__info__line"></span>
              <p className="clients__info__discription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae cupiditate dolore, excepturi illo ipsum iure laudantium similique suscipit velit voluptas.</p>
            </div>
          </li>
        </ul>
      </section>
    )
  }
}

export default BottomWorkClients
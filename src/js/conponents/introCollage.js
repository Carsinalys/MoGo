import React from 'react'
import Picture from "./svg/picture";

class IntroCollage extends React.Component {
  render() {
    return (
      <div className="intro__collage">
        <div className="intro__collage__cover1">
          <div className="intro__collage__item">
            <div className="intro__collage__image"><img src={require("../../img/collage1.jpg")} alt="collage pic" className="intro__collage__pic"/></div>
            <div className="intro__collage__item__hover">
              <div className="intro__collage__item__hover__cover">
                <Picture/>
              </div>
              <p className="intro__collage__item__text">creatively designed</p>
              <p className="intro__collage__item__bottom">Lorem ipsum dolor sit.</p>
            </div>
          </div>
          <div className="intro__collage__item">
            <div className="intro__collage__image"><img src={require("../../img/collage2.jpg")} alt="collage pic" className="intro__collage__pic"/></div>
            <div className="intro__collage__item__hover">
              <div className="intro__collage__item__hover__cover">
                <Picture/>
              </div>
              <p className="intro__collage__item__text">creatively designed</p>
              <p className="intro__collage__item__bottom">Lorem ipsum dolor sit.</p>
            </div>
          </div>
          </div>
        <div className="intro__collage__cover3">
          <div className="intro__collage__item">
            <div className="intro__collage__image"><img src={require("../../img/collage3.jpg")} alt="collage pic" className="intro__collage__pic"/></div>
            <div className="intro__collage__item__hover">
              <div className="intro__collage__item__hover__cover">
                <Picture/>
              </div>
              <p className="intro__collage__item__text">creatively designed</p>
              <p className="intro__collage__item__bottom">Lorem ipsum dolor sit.</p>
            </div>
          </div>
        </div>
         <div className="intro__collage__cover2">
           <div className="intro__collage__item">
             <div className="intro__collage__image"><img src={require("../../img/collage4.jpg")} alt="collage pic" className="intro__collage__pic"/></div>
             <div className="intro__collage__item__hover">
              <div className="intro__collage__item__hover__cover">
                <Picture/>
              </div>
              <p className="intro__collage__item__text">creatively designed</p>
              <p className="intro__collage__item__bottom">Lorem ipsum dolor sit.</p>
            </div>
           </div>
           <div className="intro__collage__item">
             <div className="intro__collage__image"><img src={require("../../img/collage5.jpg")} alt="collage pic" className="intro__collage__pic"/></div>
             <div className="intro__collage__item__hover">
              <div className="intro__collage__item__hover__cover">
                <Picture/>
              </div>
              <p className="intro__collage__item__text">creatively designed</p>
              <p className="intro__collage__item__bottom">Lorem ipsum dolor sit.</p>
            </div>
           </div>
           <div className="intro__collage__item">
             <div className="intro__collage__image"><img src={require("../../img/collage6.jpg")} alt="collage pic" className="intro__collage__pic"/></div>
             <div className="intro__collage__item__hover">
              <div className="intro__collage__item__hover__cover">
                <Picture/>
              </div>
              <p className="intro__collage__item__text">creatively designed</p>
              <p className="intro__collage__item__bottom">Lorem ipsum dolor sit.</p>
            </div>
           </div>
           <div className="intro__collage__item">
             <div className="intro__collage__image"><img src={require("../../img/collage7.jpg")} alt="collage pic" className="intro__collage__pic"/></div>
             <div className="intro__collage__item__hover">
              <div className="intro__collage__item__hover__cover">
                <Picture/>
              </div>
              <p className="intro__collage__item__text">creatively designed</p>
              <p className="intro__collage__item__bottom">Lorem ipsum dolor sit.</p>
            </div>
           </div>
         </div>
      </div>
    )
  }
}

export default  IntroCollage
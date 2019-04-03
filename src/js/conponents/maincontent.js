import React from 'react'

export default class MainContent extends React.Component{
  render() {
    return (
      <div className="container middle_theme">
        <section className="context">
          <div className="context__head">
            <p className="context__head__text">Creative Template</p>
          </div>
          <div className="context__title">
            <h1 className="context__title__text">welcome <br/> to mogo</h1>
          </div>
          <div className="context__line"></div>
          <div className="context__bottom"><a href="#" className="context__link">learn more</a></div>
        </section>
      </div>
    )
  }

}
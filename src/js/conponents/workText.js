import React from 'react'

class WorkText extends React.Component{
  render() {
    const {title, about} = this.props;
    return (
      <div className="container">
        <section className="work__text">
          <div className="work__text__top">
            <p className="work__text__top__text">{title}</p>
          </div>
          <div className="work__text_title">
            <h3 className="work__text__title__text">{about}</h3>
          </div>
          <div className="work__text__line"></div>
        </section>
      </div>
    )
  }


}

export default WorkText
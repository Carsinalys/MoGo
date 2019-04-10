import React from 'react'
import WorkText from './workText'
import IntroCollage from './introCollage'
import IntroSlider from './introSlider'

class Intro extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <WorkText title="What we do" about="Some of our work"/>
        <div className="intro__about">
          <p className="intro__about__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur esse et laborum molestiae nulla perspiciatis quis veniam veritatis voluptate!</p>
        </div>
        <IntroCollage/>
        <IntroSlider/>
      </div>
    )
  }
}

export default Intro
import React from 'react'
import AboutPics from './aboutPics'
import Numbers from './aboutNumbers'

export default function AboutText () {
  return (
    <div className="wrapper">
      <div className="container">
        <section className="about">
          <div className="about__top">
            <p className="about__top__text">What we do</p>
          </div>
          <div className="about__title">
            <h3 className="about__title__text">story about us</h3>
          </div>
          <div className="about__line"></div>
          <div className="about__discription">
            <p className="about__discription__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos facilis necessitatibus odit perspiciatis quibusdam quisquam sit? Ad alias aliquid aperiam autem cumque cupiditate debitis dolores ea enim, est facilis fuga fugiat harum inventore ipsam iste itaque laborum libero minima minus pariatur quibusdam rem, repellendus sapiente sit tempora temporibus totam voluptas.</p>
          </div>
          <AboutPics/>
        </section>
      </div>
    <Numbers/>
    </div>
  )
}
import React from 'react'
import CountTo from 'react-count-to'

export default function Numbers () {
  return (
    <div className="blue_theme">
      <div className="container">
        <section className="numbers">
          <div className="numbers__block">
            <CountTo to={42} speed={2000} className="numbers__block_number" />
            <p className="numbers__block__text">web design projects</p>
          </div>
          <div className="numbers__block">
            <CountTo to={123} speed={2000} className="numbers__block_number" />
            <p className="numbers__block__text">happy client</p>
          </div>
          <div className="numbers__block">
            <CountTo to={15} speed={2000} className="numbers__block_number" />
            <p className="numbers__block__text">award winner</p>
          </div>
          <div className="numbers__block">
            <CountTo to={99} speed={2000} className="numbers__block_number" />
            <p className="numbers__block__text">cup of coffee</p>
          </div>
          <div className="numbers__block">
            <CountTo to={24} speed={2000} className="numbers__block_number" />
            <p className="numbers__block__text">members</p>
          </div>
        </section>
      </div>
    </div>
  )
}
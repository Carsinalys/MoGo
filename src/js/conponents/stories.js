import React from 'react'
import WorkText from './workText'
import StoriesList from './storiesList'

class Stories extends React.Component{
  render() {
    return (
      <div className="container">
        <div className="stories__animation">
          <section className="stories">
            <WorkText title="Our Stories" about="Latest blog "/>
            <StoriesList/>
          </section>
        </div>
      </div>
    )
  }
}

export default Stories
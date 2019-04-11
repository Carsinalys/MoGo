import React from 'react'
import LastMap from './lastMap'
import LastSocial from './lastSocial'

class Last extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="last_animation">
          <LastMap/>
          <div className="container">
            <LastSocial/>
          </div>
        </div>
      </div>
    )
  }
}

export default Last
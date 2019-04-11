import React from 'react'
import WorkText from './workText'
import BottomWorkClients from './bottomWorkClients'

class BottomWork extends React.Component {
  render() {
    return (
      <div className="bottom__work__bg">
        <div className="bottom__work__filter">
          <div className="container">
            <WorkText title="Happy Clients" about="What people say"/>
            <BottomWorkClients/>
          </div>
        </div>
      </div>
    )
  }
}
export default BottomWork
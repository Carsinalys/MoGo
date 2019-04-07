import React from 'react'
import WorkText from './workText'

class WorkBottom extends React.Component {
  render() {
    return (
      <div className="work_bg">
        <div className="work_filter">
          <div className="container">
            <WorkText title="For all devices" about="Unique design"/>
            <div className="work__tablet">
              <img src={require("../../img/workTablet.png")} alt="" className="work__tablet__pic"/>
            </div>
            <div className="work__phone">
              <img src={require("../../img/workPhone.png")} alt="" className="work__phone__pic"/>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default WorkBottom
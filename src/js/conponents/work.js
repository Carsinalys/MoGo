import React from 'react'
import WorkText from './workText'
import ListPwers from './workListPowers'
import WorkBottom from './workBottom'

class Work extends React.Component {
  render() {
    return (
    <div className="wrapper work">
      <WorkText title="We work with" about="Amazing services"/>
      <ListPwers/>
      <WorkBottom/>
    </div>
    )
  }
}

export default Work
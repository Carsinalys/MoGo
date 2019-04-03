import React from 'react'
import Mainnav from './mainnav'
import Content from './maincontent'
import Bottom from './mainbottom'

export default function BG() {
  return (
    <div className="wrapper container_bg">
      <div className="wrapper__background">
        <Mainnav/>
        <Content/>
        <Bottom/>
      </div>
    </div>
  )
}
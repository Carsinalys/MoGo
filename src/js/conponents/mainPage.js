import React from 'react'
import {connect} from 'react-redux'
import Mainnav from './mainnav'
import Content from './maincontent'
import Bottom from './mainbottom'

import About from './about'

import PropTypes from "prop-types";

class MainPage extends React.Component {
  static propTypes = {
    pageNumber: PropTypes.number
  };
  render() {
    return (
      <div className="wrapper container_bg">
        <div className="wrapper__background" onClick={this.handleLog}>
          <Mainnav />
          {this.renderPage()}
          <Bottom/>
        </div>
      </div>
    )
  }

  renderPage = ()=>{
            let currentNumber = this.props.pageNumber;
            switch (currentNumber) {
              case 1: return <Content/>;
              case 2: return <About/>
            }
};

  handleLog = ()=>{console.log(this.props)}
}

export default connect((state)=>({
  pageNumber: state.page
}))(MainPage)
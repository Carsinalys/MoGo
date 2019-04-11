import React from 'react'
import {connect} from 'react-redux'
import PropTypes from "prop-types";

import Mainnav from './mainnav'
import Bottom from './mainbottom'

import About from './about'
import Content from './maincontent'
import Work from './work'
import Blog from './blog'
import Contacts from './contacts'
import Intro from './intro'
import BottomWork from './bottomWork'
import Stories from './stories'
import Last from './last'


class MainPage extends React.Component {
  static propTypes = {
    pageNumber: PropTypes.number
  };
  render() {
    return (
      <div className={this.getClassWrapper()}>
        <div className={this.getClassName()}>
          <Mainnav />
            {this.renderPage()}
          <Bottom/>
        </div>
      </div>
    )
  }

  getClassWrapper = () => this.props.pageNumber == 1 ? "wrapper container_bg" : "wrapper";
  getClassName = () => this.props.pageNumber == 1 ? "wrapper__background" : "";

  renderPage = ()=>{
            let currentNumber = this.props.pageNumber;
            switch (currentNumber) {
              case 1: return <Content/>;
              case 2: return <About/>;
              case 3: return <Work/>;
              case 4: return <Blog/>;
              case 5: return <Contacts/>;
              case 6: return <Intro/>;
              case 7: return <BottomWork/>;
              case 8: return <Stories/>;
              case 9: return <Last/>;
            }
};

}

export default connect((state)=>({
  pageNumber: state.page
}))(MainPage)
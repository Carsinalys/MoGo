import React from 'react'
import {connect} from 'react-redux'
import Mainnav from './mainnav'
import Bottom from './mainbottom'
import PropTypes from "prop-types";
import { CSSTransitionGroup } from 'react-transition-group'
import About from './about'
import Content from './maincontent'
import Work from './work'



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
            }
};

}

export default connect((state)=>({
  pageNumber: state.page
}))(MainPage)
import React from 'react'
import {connect} from 'react-redux'
import Mainnav from './mainnav'
import Content from './maincontent'
import PropTypes from "prop-types";
import { CSSTransitionGroup } from 'react-transition-group'
import About from './about'
import Bottom from './mainbottom'


class MainPage extends React.Component {
  static propTypes = {
    pageNumber: PropTypes.number
  };
  render() {
    return (
      <div className={this.getClassWrapper()}>
        <div className={this.getClassName()} onClick={this.handleLog}>
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
              case 2: return <About/>
            }
};

  handleLog = ()=>{console.log(this.props)}
}

export default connect((state)=>({
  pageNumber: state.page
}))(MainPage)
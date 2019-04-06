import React from 'react'
import {connect} from 'react-redux'

class Cart extends React.Component {
  render () {
   return  <svg xmlns="http://www.w3.org/2000/svg" id="cart" width="17.62" height="14.031" viewBox="0 0 17.62 14.031">
    <path className={this.props.number == 1 ? "" : "some"} d="M1501.73,40.663h0l-2.48,5.5h0a0.815,0.815,0,0,1-.7.485h0l-7.12.475,0.41,1.177h7.76a1.65,1.65,0,1,1-1.65,1.651h-7.7a1.65,1.65,0,1,1-1.65-1.651h1.49l-3.18-9.075h-1.89a0.825,0.825,0,0,1,0-1.65h2.48a0.835,0.835,0,0,1,.78.554h0l0.48,1.373h12.21a0.826,0.826,0,0,1,.83.825A0.941,0.941,0,0,1,1501.73,40.663Zm-12.39.487,1.52,4.357,7.09-.473,1.75-3.884h-10.36Z" transform="translate(-1484.19 -37.563)"/>
  </svg>
}
}

export default connect((state)=>({
  number: state.page
}))(Cart)
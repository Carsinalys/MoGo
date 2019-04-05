import React from 'react'
import MainPage from './mainPage'
import store from '../store/index'
import {Provider} from 'react-redux'

function root(props) {
  return (
    <Provider store={store}>
      <MainPage {...props}/>
    </Provider>
  )
}

export default root
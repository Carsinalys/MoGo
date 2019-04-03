import './libs/normalize-css/normalize.css'
import './scss/main.scss'

import React from 'react'
import {render} from 'react-dom'

import MainPage from './js/conponents/mainpage'


render( <MainPage /> , document.getElementById('app'));

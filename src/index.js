import './libs/normalize-css/normalize.css'
import './scss/main.scss'

import React from 'react'
import {render} from 'react-dom'

import Page from './js/conponents/mainpage'
import About from './js/conponents/about'


render( <About/> , document.getElementById('app'));

import {combineReducers} from 'redux'
import Pages from './pages'
import TypePage from './typesOfPages'

export default combineReducers({
  page: Pages,
  type: TypePage
})

import {combineReducers} from 'redux'
import Pages from './pages'
import TypePage from './like'

export default combineReducers({
  page: Pages,
  count: TypePage
})
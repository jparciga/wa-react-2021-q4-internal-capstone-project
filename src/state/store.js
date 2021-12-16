import {createStore, applyMiddleware} from 'redux'
import reducers from 'state/reducers/index'
import thunk from 'redux-thunk'

export const store = createStore(
  reducers,
  {}, //TODO: Add overall initial state
  applyMiddleware(thunk),
)

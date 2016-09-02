import {createStore, applyMiddleware, compose} from 'redux'
import * as reducers from '../reducers'
import {combineReducers} from 'redux'
import thunk from 'redux-thunk'
import devTools from 'remote-redux-devtools';

export default function configureStore( initialState) {
  let middlewares = [thunk]
  const rootReducer = getRootReducer(reducers)

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middlewares),
      devTools()
    )
  )
  
  devTools.updateStore(store)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducers = require('../reducers')
      const nextRootReducer = getRootReducer(nextReducers)
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}

function getRootReducer(reducers) {
  const rootReducer = combineReducers(
    Object.assign(
      {},
      reducers
    )
  )
  return rootReducer
}
import {createStore, applyMiddleware, compose} from 'redux'
import * as reducers from '../reducers'
import {combineReducers} from 'redux'
import thunk from 'redux-thunk'
import { routerReducer, routerMiddleware} from 'react-router-redux'

export default function configureStore( initialState) {
  const rootReducer = getRootReducer(reducers, useRouter)
  let middlewares = [thunk]

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middlewares),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducers = require('../reducers')
      const nextRootReducer = getRootReducer(nextReducers, useRouter)
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}

function getRootReducer(reducers, useRouter) {
  const rootReducer = combineReducers(
    Object.assign(
      {},
      reducers
    )
  )
  return rootReducer
}
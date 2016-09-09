import merge from "lodash/merge"
import * as actionTypes from '../constants/ActionTypes'
import { PUSH_ROUTE, POP_ROUTE } from '../constants/ActionTypes'
import { NavigationExperimental } from 'react-native'
const {
  StateUtils: NavigationStateUtils
} = NavigationExperimental

const initialState = {
  index: 0,
  routes: [{
    key: 'home',
    title: 'Map'
  }]
}

export function navigationState(state = initialState, action) {
  switch (action.type) {
    case PUSH_ROUTE:
      return NavigationStateUtils.push(state, action.route)
    case POP_ROUTE:
      return NavigationStateUtils.pop(state)
    default:
      return state
  }
}

export function entities(state = {}, action) {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities)
  }
  return state
}

export function user(state = null, action) {
  switch (action.type) {
    default:
      return state
  }
}

export function message(state = null, action) {
  switch (action.type) {
    default:
      return state
  }
}

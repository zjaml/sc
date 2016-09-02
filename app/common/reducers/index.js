import merge from "lodash/merge"
import * as actionTypes from '../constants/ActionTypes'

export function entities(state=null, action){
    if (action.response && action.response.entities){
      return merge({}, state, action.response.entities)
    }
    return state
}

export function user(state=null, action){
   switch (action.type) {
     default:
       return state
   }
}

export function message(state= null, action){
  switch(action.type){
    default:
      return state
  }
}

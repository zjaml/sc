import * as actionTypes from '../constants/ActionTypes'
import {Schema, arrayOf, normalize} from 'normalizr'
import {stores} from '../dummy/tasks'

const storeSchema = new Schema('stores', {
  idAttribute: 'id'
})

const taskSchema = new Schema('tasks', {
  idAttribute: 'id'
})

storeSchema.define({
  tasks: arrayOf(taskSchema)
})

export function loadTasks() {
  return dispatch => {
    setTimeout(function() {
      const normalized = normalize(stores, arrayOf(storeSchema))
      dispatch({
        type: actionTypes.RECEIVE_TASKS,
        response: normalized
      })
    }, 100);
  }
}

export function push(route) {
  return dispath => {
    dispatch({
      type: actionTypes.PUSH_ROUTE,
      route
    })
  }
}

export function pop() {
  return dispatch => {
    dispatch({
      type: actionTypes.POP_ROUTE
    })
  }
}
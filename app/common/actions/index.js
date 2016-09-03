import * as actionTypes from '../constants/ActionTypes'
import {Schema, arrayOf, normalize} from 'normalizr'
import {stores} from '../dummy/tasks'

const storeSchema = new Schema('store', {
  idAttribute: 'id'
})

const taskSchema = new Schema('task', {
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
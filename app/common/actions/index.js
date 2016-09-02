import * as actionTypes from '../constants/ActionTypes'

export function loadMyKeys() {
  return (dispatch) => {
    // return client({
    //   path: 'api/mykeys',
    //   method: 'post'
    // })
    //   .then(res => {
    //     dispatch(receiveKeys(res.entity))
    //   }, res => {
    //     dispatch(receiveErrorResponse(res.entity.message))
    //   })
    return {
      type: actionTypes.RECEIVE_KEY,
      response: normalized
    }
  }
}

export function loadTasks() {
  return dispatch => {
    return {
      type: actionTypes.FETCH_TASKS,
      response: {}
    }}
}
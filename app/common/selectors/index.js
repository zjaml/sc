import { createSelector } from 'reselect'
import _ from 'lodash'

export const getStores = createSelector(
  state => state.entities.stores,
  stores => stores && _.values(stores)
)

export const getTasksForStore = createSelector(
  (state, storeId) => state.entities.stores[storeId],
  store => {
    if(!store)
      return []
    return store.tasks.map(taskId=> state.entities.tasks[taskId])
  }
)
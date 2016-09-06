import { createSelector } from 'reselect'
import _ from 'lodash'

export const getStores = createSelector(
  state => state.entities.stores,
  stores => stores && _.values(stores)
)

export const getTasksForStore = createSelector(
  [(state, storeId) => state.entities.stores[storeId],
    state => state.entities.tasks],
  (store, taskDict) => {
    console.log(store);
    if (!store)
      return []
    return store.tasks.map(taskId => taskDict[taskId])
  }
)
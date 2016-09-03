import { createSelector } from 'reselect'
import _ from 'lodash'

export const getStores = createSelector(
  state => state.entities.stores,
  stores => stores && _.values(stores)
)
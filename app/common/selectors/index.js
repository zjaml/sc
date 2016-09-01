import { createSelector } from 'reselect'
import _ from 'lodash'

export const getKeysGroupedByLocker = createSelector(
  state => state.entities.keys,
  keys => _.groupBy(_.filter(_.values(keys),'locker'), 'locker')
)

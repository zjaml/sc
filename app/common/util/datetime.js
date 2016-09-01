import moment from 'moment'
import {TIME_FORMAT, DATE_SHORT} from '../../common/constants/DateFormat'

export function timeSpanForDisplay(start, end) {
  return `${moment.utc(start).local().format(DATE_SHORT)} ${moment.utc(start).local().format(TIME_FORMAT)} ~ ${moment.utc(end).local().format(TIME_FORMAT)}`
}

// return a local date object from the utcString
export function dateFromUtcTimeString(strUtcTime){
  return moment.utc(strUtcTime).local().toDate()
}

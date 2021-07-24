import{ format } from 'date-fns'
import DateTimeSetting from 'constants/DateTimeSetting'

export const formatDateTime=(dateTime)=>{
  return format(new Date(dateTime),DateTimeSetting.DEFAULT_DATE_TIME_FORM)
}
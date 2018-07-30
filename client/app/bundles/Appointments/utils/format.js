import moment from 'moment'

export const formatDate = function(d) {
  return moment(d).format('DD MMM YYYY, h:mm:ss a')
};

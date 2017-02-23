import { ajax } from '../utils/client'

export const routes = (from, to) => ajax({
  method: 'GET',
  url: `http://lazy-cyclist.herokuapp.com/${from}/${to}`
})

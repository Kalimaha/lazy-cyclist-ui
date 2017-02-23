import { routes } from '../repositories/lazy_cyclist'

export const UPDATE_FROM = (from) => {
  return {
    type: 'UPDATE_FROM',
    from: from
  }
}

export const UPDATE_TO = (to) => {
  return {
    type: 'UPDATE_TO',
    to: to
  }
}

export const FETCH_ROUTES = (from, to) => dispatch => {
  dispatch({
    type: 'FETCH_ROUTES_REQUEST',
    from: from,
    to: to
  })

  routes(from, to).then(
    (response)  => {
      dispatch({
        type: 'FETCH_ROUTES_SUCCESS',
        response
      })
    },
    (errors)    => dispatch({
      type:   'FETCH_ROUTES_FAILURE',
      errors: errors.statusText
    })
  )
}

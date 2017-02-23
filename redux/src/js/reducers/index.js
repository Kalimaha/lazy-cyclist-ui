const initial_state = {
  from:     'Federation Square, Melbourne, Australia',
  to:       '511 Church St, Melbourne, Australia',
  valid:    true,
  message:  'Valid selection.',
  is_fetching: false,
  routes: []
}

const is_valid  = (from, to)  => (from.length > 0 && to.length > 0)
const message   = (valid)     => valid  ? 'Valid selection.'
                                        : 'Both "From" and "To" fields are required.'

const Reducer = (state = initial_state, action) => {
  switch (action.type) {
    case 'UPDATE_FROM':
      return Object.assign({}, state, {
        from:     action.from,
        valid:    is_valid(action.from, state.to),
        message:  message(is_valid(action.from, state.to))
      })
    case 'UPDATE_TO':
      return Object.assign({}, state, {
        to:       action.to,
        valid:    is_valid(state.from, action.to),
        message:  message(is_valid(state.from, action.to))
      })
    case 'FETCH_ROUTES_REQUEST':
      return Object.assign({}, state, {
        is_fetching: true
      })
    case 'FETCH_ROUTES_SUCCESS':
      return Object.assign({}, state, {
        is_fetching: false,
        routes: JSON.parse(action.response)
      })
    case 'FETCH_ROUTES_FAILURE':
      return Object.assign({}, state, {
        is_fetching: false,
        routes: action.errors
      })
    default:
      return state
  }
}

export default Reducer

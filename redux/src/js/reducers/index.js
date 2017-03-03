const initial_state = {
  from:         'Federation Square, Melbourne, Australia',
  to:           '511 Church St, Melbourne, Australia',
  valid:        true,
  message:      'Valid selection.',
  is_fetching:  false,
  routes:       []
}

const UPDATE_FROM = 'UPDATE_FROM'
const UPDATE_TO = 'UPDATE_TO'
const FETCH_ROUTES_REQUEST = 'FETCH_ROUTES_REQUEST'
const FETCH_ROUTES_SUCCESS = 'FETCH_ROUTES_SUCCESS'
const FETCH_ROUTES_FAILURE = 'FETCH_ROUTES_FAILURE'

const is_valid  = (from, to)  => (from.length > 0 && to.length > 0)
const message   = (valid)     => valid  ? null : 'Both "From" and "To" fields are required.'

const Reducer = (state = initial_state, action) => {
  switch (action.type) {
    case UPDATE_FROM:
      return Object.assign({}, state, {
        from:     action.from,
        valid:    is_valid(action.from, state.to),
        message:  message(is_valid(action.from, state.to))
      })
    case UPDATE_TO:
      return Object.assign({}, state, {
        to:       action.to,
        valid:    is_valid(state.from, action.to),
        message:  message(is_valid(state.from, action.to))
      })
    case FETCH_ROUTES_REQUEST:
      return Object.assign({}, state, {
        is_fetching: true
      })
    case FETCH_ROUTES_SUCCESS:
      const routes = JSON.parse(action.response)

      return Object.assign({}, state, {
        is_fetching:  false,
        routes:       routes
      })
    case FETCH_ROUTES_FAILURE:
      return Object.assign({}, state, {
        is_fetching:  false,
        valid:        false,
        message:      `Failed to fetch routes 😕 Reason: ${action.errors}`,
      })
    default:
      return state
  }
}

export default Reducer

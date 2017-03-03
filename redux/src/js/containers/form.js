import { connect } from 'react-redux'
import Form from '../components/form'
import { FETCH_ROUTES, UPDATE_FROM, UPDATE_TO } from '../actions/index'

const mapStateToProps = (state) => {
  return {
    from:   state.from,
    to:     state.to,
    valid:  state.valid
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    submitAction: (from, to)  => dispatch(FETCH_ROUTES(from, to)),
    updateFrom:   (e)         => dispatch(UPDATE_FROM(e.target.value)),
    updateTo:     (e)         => dispatch(UPDATE_TO(e.target.value))
  }
}

const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)

export default FormContainer

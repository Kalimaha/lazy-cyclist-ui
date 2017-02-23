import { connect } from 'react-redux'
import Results from '../components/results'

const display_spinner = (is_fetching) => is_fetching ? { display: 'block' } : { display: 'none' }

const mapStateToProps = (state) => {
  return {
    display_spinner: display_spinner(state.is_fetching),
    routes: state.routes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const ResultsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Results)

export default ResultsContainer

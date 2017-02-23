import { connect } from 'react-redux'
import Tabs from '../components/tabs'

const mapStateToProps = (state) => {
  return {
    routes: state.routes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const TabsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tabs)

export default TabsContainer

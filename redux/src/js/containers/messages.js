import { connect } from 'react-redux'
import Messages from '../components/messages'

const messageClassName = (valid) => valid ? { display: 'none' } : { display: 'block' }

const mapStateToProps = (state) => {
  return {
    message: state.message,
    style: messageClassName(state.valid)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages)

export default MessagesContainer

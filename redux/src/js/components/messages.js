import React from 'react'

const Messages = ({ message, style }) => (
  <div className="alert alert-danger" style={style}>
    {message}
  </div>
)

export default Messages

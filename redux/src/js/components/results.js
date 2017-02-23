import React from 'react'

const Results = ({ display_spinner, routes }) => (
  <div className="row">
    <div className="col-lg-12 text-center" style={display_spinner}>
      <i className="fa fa-refresh fa-spin fa-3x fa-fw"></i>
    </div>
  </div>
)

export default Results

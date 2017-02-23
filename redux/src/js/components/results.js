import React from 'react'
import TabsContainer from '../containers/tabs'

const Results = ({ display_spinner, display_results, routes }) => (
  <div>
    <div className="row" style={display_spinner}>
      <div className="col-lg-12 text-center">
        <i className="fa fa-refresh fa-spin fa-3x fa-fw"></i>
      </div>
    </div>
    <div className="row" style={display_results}>
      <div className="col-lg-12">
        <TabsContainer routes={routes} />
      </div>
    </div>
  </div>
)

export default Results

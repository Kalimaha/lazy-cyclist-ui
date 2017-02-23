import React from 'react'

const RouteButton = ({ valid, from, to, submitAction }) => (
  <div className="row">
    <div className="col-lg-12">
      <button disabled={!valid}
              onClick={() => submitAction(from, to)}
              className="btn btn-primary"
              style={{ width: "100%" }}>
        Route!
      </button>
    </div>
  </div>
)

export default RouteButton

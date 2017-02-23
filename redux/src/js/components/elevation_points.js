import React from 'react'

const ElevationPoints = () => (
  <div className="row">
    <div className="col-lg-12">
      <label>
        Extra Elevation Points
      </label>
    </div>
    <div className="col-lg-12">
      <div className="btn-group" data-toggle="buttons" style={{width: "100%"}}>
        <label className="btn btn-default active">
          <input type="radio" name="optradio" defaultChecked=""/>0
        </label>
        <label className="btn btn-default">
          <input type="radio" name="optradio" defaultChecked=""/>1
        </label>
        <label className="btn btn-default">
          <input type="radio" name="optradio" defaultChecked="checked"/>2
        </label>
      </div>
    </div>
  </div>
)

export default ElevationPoints

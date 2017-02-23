import React from 'react'

const ElevationPoints = () => (
  <div className="row">
    <div className="col-lg-12">
      <label>
        Extra Elevation Points
      </label>
    </div>
    <div className="col-lg-12">
    <label className="radio-inline"><input type="radio" name="optradio" defaultChecked=""/>0</label>
    <label className="radio-inline"><input type="radio" name="optradio" defaultChecked="checked"/>1</label>
    <label className="radio-inline"><input type="radio" name="optradio" defaultChecked=""/>2</label>
    </div>
  </div>
)

export default ElevationPoints

import React from 'react'

const Field = ({ label, placeholder, defaultValue, onChange }) => (
  <div className="row">
    <div className="col-lg-12">
      <label>
        { label }
      </label>
    </div>
    <div className="col-lg-12">
      <input  className="form-control"
              placeholder={placeholder}
              defaultValue={defaultValue}
              onChange={onChange} />
    </div>
  </div>
)

export default Field

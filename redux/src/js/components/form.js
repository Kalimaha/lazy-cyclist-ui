import React from 'react'
import Field from './field'
import RouteButton from './route_button'

const Form = ({ from, to, updateFrom, updateTo, submitAction, valid }) => (
  <div>
    <Field label="From"
           placeholder="e.g. Federation Square, Melbourne, Australia"
           defaultValue={from}
           onChange={updateFrom} />
    <br />
    <Field label="To"
           placeholder="e.g. 511 Church St, Melbourne, Australia"
           defaultValue={to}
           onChange={updateTo} />
    <br />
    <RouteButton valid={valid} from={from} to={to} submitAction={submitAction} />
  </div>
)

export default Form

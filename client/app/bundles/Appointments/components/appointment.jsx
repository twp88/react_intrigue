import React, { PropTypes } from 'react'
import moment from 'moment'
import { formatDate } from '../utils/format'


export const Appointment = ({appointment}) =>
  <div className='appointment'>
    <h3>{appointment.title}</h3>
    <p>{formatDate(appointment.appt_time)}</p>
  </div>

Appointment.propTypes = {
  appointment: PropTypes.object.isRequired
}

// this has been re-written as stateless function. A stateless function is
// like a component that has no state, but returns some jsx. It has been re-
// written using arrow function syntax, and the props have been destructured
// to use {appointment}. This tells the function that the incoming appointment
// prop must have an appointment property on it.

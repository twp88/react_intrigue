import React, { PropTypes } from 'react'
import { Appointment } from './appointment'

export const AppointmentsList = ({appointments}) =>
  <div>
    {appointments.map(function(appointment) {
      return (
        // This component cycles through all of the existing appointments
        // passing each one to the appointment component
        <Appointment appointment={appointment} />
      )
    })}
  </div>

AppointmentsList.propTypes = {
  appointments: PropTypes.array.isRequired
}

const Appointment = ({appointment}) =>
  <div className='appointment'>
    <h3>{appointment.title}</h3>
    <p>{formatDate(appointment.appt_time)}</p>
  </div>

// this has been re-written as stateless function. A stateless function is
// like a component that has no state, but returns some jsx. It has been re-
// written using arrow function syntax, and the props have been destructured
// to use {appointment}. This tell the function that the incoming appointment
// prop must have an appointment property on it.

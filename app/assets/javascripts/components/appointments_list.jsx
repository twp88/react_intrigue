const AppointmentsList = ({appointments}) =>
  <div>
    {appointments.map(function(appointment) {
      return (
        // This component cycles through all of the existing appointments
        // passing each one to the appointment component
        <Appointment appointment={appointment} />
      )
    })}
  </div>

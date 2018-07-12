var AppointmentsList = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.appointments.map(function(appointment) {
          return (
            // This component cycles through all of the existing appointments
            // passing each one to the appointment component
            <Appointment appointment={appointment} />
          )
        })}
      </div>
    )
  }
});

var Appointments = React.createClass({
  getInitialState: function() {
    return {
      appointments: this.props.appointments,
      ting_title: 'Team standup meeting',
      appt_data: 'Tomorrow at 9am',
    }
  },
  handleUserInput: function(obj) {
    this.setState(obj);
  },
  handleFormSubmit: function() {
    var appointment = {title: this.state.ting_title,
                       appt_time: this.state.appt_data}
    $.post('/appointments',
      {appointment: appointment}).done(function(data){
        this.addNewAppointment(data);
      });
  },
  addNewAppointment: function(appointment) {
    var appointments = React.addons.update(this.state.appointments, { $push: [appointment]});
    this.setState({appointments: appointments})
  },
  render: function() {
   return (
      <div>
        <AppointmentForm input_title={this.state.ting_title}
        input_appt_data={this.state.appt_data}
        onUserInput={this.handleUserInput()}
        onFormSubmit={this.handleFormSubmit}/>

        <AppointmentsList appointments={this.state.appointments} />
      </div>
   )
  }
});

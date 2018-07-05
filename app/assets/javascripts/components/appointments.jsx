var Appointments = React.createClass({
  getInitialState: function() {
    return {
      appointments: this.props.appointments,
      input_title: 'Team standup meeting',
      input_appt_data: 'Tomorrow at 9am',
    }
  },
  handleUserInput: function(obj) {
    this.setState(obj);
  },
  render: function() {
   return (
      <div>
        <AppointmentForm input_title={this.state.input_title}
        input_appt_data={this.state.input_appt_data}
        onUserInput={this.handleUserInput}/>
        <AppointmentsList appointments={this.state.appointments} />
      </div>
   )
  }
});

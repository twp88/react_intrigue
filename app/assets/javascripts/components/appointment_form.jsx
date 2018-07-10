var AppointmentForm = React.createClass({
  handleChange: function(e) {
    var name = e.target.name;
    obj = {};
    obj[name] = e.target.value;
    console.log(obj);
    console.log(this.props.onUserInput);
    this.props.onUserInput(obj);
  },
  handleSubmit: function(e) {
    e.preventDefault();
    this.props.onFormSubmit();
  },
  render: function() {
    return (
      <div>
        <h2>Make a new appointment</h2>
        <form onSubmit={this.handleSubmit}>
          <input name='title' placeholder= 'Appointment'
            value={this.props.input_title}
            onChange={this.handleChange} />
          <input name='time' placeholder='Date and Time'
            value={this.props.input_appt_data}
            onChange={this.handleChange} />
          <input type='submit' value='Make Appointment' />
        </form>
      </div>
    )
  }
});

var AppointmentForm = React.createClass({
  render: function() {
    render (
      <div>
        <h2>Make a new appointment</h2>
        <form>
          <input name='title' placeholder= 'Appointment'/>
          <input name='time' placeholder='Date and Time'/>
          <input type='submit' value='Make Appointment'/>
        </form>
      </div>
    )
  }
});

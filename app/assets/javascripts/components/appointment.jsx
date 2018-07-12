var Appointment = React.createClass({
  render: function() {
    return (
        <div className='appointment'>
          // this component gets passed props with appointment title
          // and appointment and the date/time
          <h3>{this.props.appointment.title}</h3>
          <p>{formatDate(this.props.appointment.appt_time)}</p>
          // formatDate is a JS function written by moi that uses
          // moment.js (3rd party). See assets/javascripts/utils.js
        </div>
      )}
});

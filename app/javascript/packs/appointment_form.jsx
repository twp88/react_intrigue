import React from 'react'
import Datetime from 'react-datetime'
import 'react-datetime/css/react-datetime'

export default class AppointmentForm extends React.Component {
  // this is the callback function that gets called for the form onSubmit function.
  // It takes e which stands fo event.
  handleChange(e) {
    const name = e.target.name;
    // First it sets up the variable name which takes the value of name from the event
    // i.e. title
    const obj = {};
    obj[name] = e.target.value;
    // It then saves this variable as the name of a value in an empty object
    // (ruby would be a hash) and assigns it a value i.e. the actual title string
    console.log(obj);
    console.log(this.props.onUserInput);
    // It then passes this object to another function that has been passed to this
    // component as a prop from the appointments component. In appointments this
    // function is known as handleUserInput
    this.props.onUserInput(obj);
    // this changes the state in the appointments component, which is what
    // gets rendered after the form is submitted
  }

  // this is the function used to help save the appointment to the backend
  handleSubmit(e) {
    //this prevents the default value from being saved (it's not doing so however)
    e.preventDefault();
    this.props.onFormSubmit();
    //this triggers the handleFormSubmit function in the appointments form which
    // sends a jquery post request to a rails controller action (endpoint)
  }

  setAppTime(e) {
    // this has a similiar process to the function handleChange
    const name = 'appt_data';
    const obj ={};
    // the next line is the only difference, as it converts the numeric value
    // into a date
    if(obj[name] = e.toDate()) {
      this.props.onUserInput(obj);
    }
  }

  render () {
    // this is for the Datetime feature. An obj called inputProps with a name variable
    var inputProps = {
      name: 'appt_data'
    };
    return (
      // wrapping again in div tags
      <div>
        <h2>Make a new appointment</h2>
        <form onSubmit={(event) => this.handleSubmit(event)}>
        // the onSubmit function is handleSubmit

          <input name='title' placeholder= 'Appointment'
          // input field
            value={this.props.input_title}
            // default value
            onChange={(event) => this.handleChange(event)} />
            // function to handle change

          <Datetime input={false} open={true}
          // An element which is a 3rd party react component
            inputProps={inputProps}
            value={this.props.appt_data}
            onChange={(event) => this.setAppTime(event)}/>

          <input type='submit' value='Make Appointment' className='submit-button'/>
          // note the use of className for the purposes of css styling, not simply class
        </form>
      </div>
    )
  }
}

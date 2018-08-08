import React from 'react'
import ReactDOM from 'react-dom'
import AppointmentForm from './appointment_form'
import Datetime from 'react-datetime'
import update from 'immutability-helper'
import { AppointmentsList } from './appointments_list'

export default class Appointments extends React.Component {
  constructor(props) {
    super(props)
    // This function is baked into react and sets the initial state for objects
    // in this component
    this.state = {
      appointments: this.props.appointments,
      ting_title: '',
      appt_data: 'Tomorrow at 9am',
    }
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.addNewAppointment = this.addNewAppointment.bind(this);
  }

  handleUserInput(value) {
    // this callback function takes an object and sets the state of this object
    // to whatever it is passed. Notice that the point of truth for appointments
    // seems to this component. Most of what will get sent will be in the form
    // of a js object i.e. obj['appt_data']='thing'
    if (typeof value === "string") {
      this.setState({
        ting_title: value
      })
    } else {
      this.setState({
        appt_data: value
      })
    }
  }

  handleFormSubmit() {
    // this is the function which deals with submitting a new appointment to the
    // backend.
    var appointment = {title: this.state.ting_title,
                       appt_time: this.state.appt_data}

    $.post('/appointments', {appointment: appointment}).done((data) => {
      // this above line uses a jquery post request. Use to 'rake routes' to
      // see the route that it's using. It's then using the .done callback to
      // do something else if the first part (the post) is successful. In this
      // case it will call the function addNewAppointment with the argument data
      // which is presumably the newly minted appointment
        this.addNewAppointment(data);
      });
  }

  addNewAppointment(appointment) {
    const appointments = update(this.state.appointments,
    { $push: [appointment]});
    this.setState({
      appointments: appointments.sort(function(a,b){
        return new Date(a.appt_data) - new Date(b.appt_data);
        // the new Date method returns a numerical value which is then sorted into order by the
        // .sort(function(a,b){return a-b}); function in ascending order
        // this can be reversed by switching a for be e.g .sort(function(a,b){return b-a});
      })
    });
  }

  // this is where all of the components and functions as defined above and in
  // other components are
  // rendered to the page. Always needing a div to wrap them in.
  // VVVVV
  render () {
   return (
      <div>
        // this is the input form which uses state for the default
        // input, passing it as a prop to the appointment form component.
        // It does the same for input_appt_data. This is so that the AppointmentForm
        // component can have some default values.
        //
        // It also uses functions defined above which are within
        // the scope of this component.
        <AppointmentForm input_title={this.state.ting_title}
        input_appt_data={this.state.appt_data}
        // Below are two functions which are passed as props to the AppointmentForm
        // Note that they are renamed, and that they use this. showing that the scope
        // is for this Appointments component
        onUserInput={(obj) => this.handleUserInput(obj)}
        onFormSubmit={() => this.handleFormSubmit()}/>

        // This is where AppointmentsList is passed the appointments from the state.
        // See the top to see where it is defined.
        <AppointmentsList appointments={this.state.appointments} />
      </div>
   )
  }
}


document.addEventListener('DOMContentLoaded', () => {
 const node = document.getElementById('appointments_data')
 const data = JSON.parse(node.getAttribute('data'))

ReactDOM.render(
 <Appointments appointments={data} />,
 document.body.appendChild(document.createElement('div')),
 )
})

class AppointmentsController < ApplicationController
  def index
    @appointments = Appointment.order('appt_time ASC')
    @appointment = Appointment.new
  end

  def create
    puts "HI1"
    @appointment = Appointment.create(appointment_params)
    puts "HI2"
    @appointments = Appointment.order('appt_time ASC')
    puts "HI3"
    redirect_to '/'
  end

  private

  def appointment_params
    params.require(:appointment).permit(:title, :appt_time)
  end
end

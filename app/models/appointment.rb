class Appointment < ApplicationRecord
  validates_presence_of :title, :appt_time
  validates :title, length: { minimum: 3 }
  validate :appt_time_cannot_be_in_the_past

  private

  def appt_time_cannot_be_in_the_past
    if appt_time.present? && appt_time < Time.now
      errors.add(:appt_time, "Time can't be in the past")
    end
  end
end

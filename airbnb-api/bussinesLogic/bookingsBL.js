const bookingsModel= require('../models/bookingModel')

const saveBooking =  (booking) => {
    try {

         bookingsModel({
             ...booking,
             experience_id: booking.id,
             booking_date: booking.bookingDate
            }).save()
    } catch (error) {
        console.error('error al guardar la reserva', error)
    }
}

module.exports = {
    saveBooking
}
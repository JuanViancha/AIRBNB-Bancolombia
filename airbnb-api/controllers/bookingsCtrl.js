const { saveBooking } = require('../bussinesLogic/bookingsBL')

const saveBookings = async (req, res) => {
    try {
        saveBooking(req.body)
    } catch (error) {
        res.status(500).send(error)        
    }
}

module.exports = {
    saveBookings
}

const router = require('express').Router()
const {saveBookings}  = require('./../controllers/bookingsCtrl')

router.post('/booking',saveBookings)

module.exports = router 
const express = require('express');
const router = express.Router();
const userRouter = require('./user.route');
const authRouter = require('./auth.route');
const typePlaceRouter = require('./typePlace.route');
const placeRouter = require('./place.route');
const bookingRouter = require('./booking.route');

router.use('/auth', authRouter);
router.use('/user', userRouter);
router.use('/type-place', typePlaceRouter);
router.use('/place', placeRouter);
router.use('/booking', bookingRouter);

module.exports = router;
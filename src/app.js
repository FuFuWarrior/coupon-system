const express = require('express');
const app = express();
const cartRoutes = require('./routes/cartRoutes')

app.use(express.json())

app.use('/api/v1/', cartRoutes);
// app.use('/api/v1/', couponRoutes);


module.exports = app;
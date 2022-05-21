const express = require('express');
const app = express();
const cartRoutes = require('./routes/cartRoutes');
const couponRoutes = require('./routes/couponRoutes');

app.use(express.json())

app.use('/api/v1/', cartRoutes);
app.use('/api/v1/', couponRoutes);


module.exports = app;
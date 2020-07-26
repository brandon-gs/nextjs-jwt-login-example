/* eslint-disable no-console */
const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGODB_URI, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('>> DATABASE IS CONNECTED'))
  .catch(() => console.log('>> PROBLEM IN DB CONNECT'));

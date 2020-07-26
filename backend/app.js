const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes
app.use('/', require('./src/routes/authentication.routes'));
app.use('/api', require('./src/routes/user.routes'));

module.exports = app;

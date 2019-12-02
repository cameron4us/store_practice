// app.js

const express = require('express');
const connectDB = require('./config/db');
const routes = require('./routes/api/reptiles');

const app = express();

// Use api routes
app.use('/', routes);

// Connect Database
connectDB();

//app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));

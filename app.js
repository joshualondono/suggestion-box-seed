const express = require('express');
const app = express();

const path = require('path');
const morgan = require('morgan');
const appRoutes = require('./routes/appRoutes');

require('dotenv').config();

//setting the port for the server.  
const port = process.env.PORT || 8081;

const mongoose = require('mongoose');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

mongoose
  .connect('mongodb://localhost:27017/mydb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(`MongoDB Error: ${err}`));

//middleware for POST request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//useroutes middleware
app.use('/api/v1/app', appRoutes);

//logging middleware
app.use(morgan('dev'));

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
  });


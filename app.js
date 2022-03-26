// MONGODB CONNECTION: mongodb+srv://sparky:<password>@cluster0.z3atg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const express = require('express');
const mongoose = require('mongoose');
const stuffRoutes = require('./routes/stuff');
const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://sparky:devtest12345@cluster0.z3atg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
  .then(() => {
    console.log('succesfully connected to MongoDB Atlas!')
  })
  .catch((error) =>{
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  })

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/api/stuff', stuffRoutes);


module.exports = app;
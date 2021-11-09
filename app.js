const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());

//import routes
const bookRoute= require('./routes/books');
app.use('/books',bookRoute);

//listening
mongoose.connect("mongodb://localhost:27017/myowndb",() =>{
    console.log("Database Connected");
});
app.listen(8080);

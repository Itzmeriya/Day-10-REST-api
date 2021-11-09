//const express = require('express');
const mongoose = require('mongoose');
const bookSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    publisher:{
        name:{
        type:String,
        required:true},
        city:{
            zipcode:{
                type:String,
                required:true},
            cityname:{
            type:String,
            required:true}
        }
    }
});

module.exports=mongoose.model('Book',bookSchema)
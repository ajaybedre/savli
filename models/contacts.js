'use strict:'
const mongoose=require('mongoose');
const contactSchema=new mongoose.Schema({
    contact:{
        require:true,
        type:Number
    },
    name:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

const contact=mongoose.model('contact',contactSchema);
module.exports = contact;
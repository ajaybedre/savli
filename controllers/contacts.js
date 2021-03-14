const express=require('express');
const jwt=require('jsonwebtoken');
const contact = require('../models/contacts');
//const sessionStorage=require('sessionstorage');



exports.addContact=(async (req,res)=>{
    var token=null;
    var user=null;
    token=req.cookies.token;
    if(token){
        user=jwt.verify(token,process.env.JWT_SECRET);
    }
    
    const newContact=new contact({
        userId:user._id,
        contact:req.body.contactNumber,
        name:req.body.name
    });
    const result=await newContact.save();
    if(result){
        return res.redirect("/user/contacts");
    }else{
        return res.json({message:"Something wrong! Unable to add contact."});
    }
});
    



exports.deleteContacts=async (req,res)=>{
    const data=await contact.findByIdAndRemove({_id:req.params.id});
    if(data){
        return res.status(200).json({"success":"Contact deleted successfully!"})
    }else{
        return res.status(400).json({"message":"Something went wrong!"})
    }
};

exports.getContacts=async(req,res)=>{  
    const token=req.cookies.token;
    if(token){
        var contactArray=[];
        const user=jwt.verify(token,process.env.JWT_SECRET);                
        const tempContactArray=await contact.find({userId:user._id});
        tempContactArray.forEach(contactData=>{
            contactArray.push({"name":contactData.name,"number":contactData.contact,"id":contactData._id});
        })
        return res.render('contacts',{"contactArray":contactArray,"username":user.username});
    }
    else{
        return res.redirect('/')
    }
    
};
const contacts = require('../models/contacts');
const fast2sms = require('fast-two-sms');
//const sessionstorage=require('sessionstorage');
const jwt=require('jsonwebtoken');


exports.sendMessage=(async(req,res)=>{
    var user=null;
    var contactArray=[];
    const token=req.cookies.token;
    if(token){
        user=jwt.verify(token,process.env.JWT_SECRET);
    }
    if(user){  
        const tempContactArray=await contacts.find({userId:user._id},{name:0,_id:0,userId:0,createdAt:0,updatedAt:0,__v:0});
        tempContactArray.forEach((oneContact)=>{
            contactArray.push(oneContact.contact)
        })
    }
    const options = {authorization : process.env.FAST2SMS_API_KEY , message : `http://maps.google.com/?q=<${req.body.lat}>,<${req.body.lon}>` ,  numbers : contactArray,sender_id:user.contact} 
    async function smsSend(options){
        const response = await fast2sms.sendMessage(options);
        return response;
    }
    smsSend(options)
    .then(reply=>{
        if(reply.return){
            return res.json({"Success":"message sent successfully!"})
        }
    })
    .catch(err=>{
        return res.json({"Error":`Error ${err}`})
    })
});


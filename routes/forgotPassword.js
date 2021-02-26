const { response } = require('express');
const fast2sms=require('fast-two-sms');
const bcrypt=require('bcrypt');
const express=require('express');
const user=require("../models/users");
const router=express.Router();

router.get('/',(req,res)=>{
       res.render('forgotPassword');
})

router.post('/',async (req,res)=>{
       const phone=req.body.number;
       var username;
       var contactNumber;
       var password;
       var response1=null;
       var response2=null;
       const myUser=await user.findOne({contactNumber:phone})
       if(myUser){
              username=myUser.username;
              contactNumber=myUser.contactNumber;
              password=Math.random().toString(16).substr(2, 8);
              hashPassword=bcrypt.hashSync(password,10);
              response1=await user.findByIdAndUpdate(myUser._id,{hash_password:hashPassword})
              if(response1){
              const option = {authorization : process.env.FAST2SMS_API_KEY , message : `Here is your account login details as per your request,Please don't share this secret details with anyone else. Username: ${username} Password: ${password}` ,  numbers : [contactNumber]};
              async function smsSend(option){
                  response2 = await fast2sms.sendMessage(option);
                  return response2;
              }
              smsSend(option)
              .then(reply=>{
               if(reply.return){
                     //console.log(reply);
                     res.redirect('/login');
               }else{
                     res.redirect('/user/forgotPassword');
               }
              })
              .catch(err=>{
                     res.redirect('/user/forgotPassword');
              });
              }
               
              
        }
})

module.exports=router;
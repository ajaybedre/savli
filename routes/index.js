const express=require('express');
const jwt =require('jsonwebtoken');
//const sessionStorage=require('sessionstorage');
const router=express.Router();

router.get('/',(req,res)=>{
     var user=null;
     var token=null;
     token =req.cookies.token;
    if(token){
        user=jwt.verify(token,process.env.JWT_SECRET);
    }
    if(user){
        res.render('index',{'isAuthorised':true,'username':user.username});
    }else{
        res.render('index',{'isAuthorised':false,'username':"hello"});
    }
    //res.render('index');
})

module.exports=router;
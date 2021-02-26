const jwt =require("jsonwebtoken");
const sessionStorage=require("sessionstorage");
const express=require('express');
const router=express.Router();


exports.isAuth=((req,res,next)=>{
    const user=null;
    const token=sessionStorage.getItem("token");
    if(token){
        user=jwt.verify(token,process.env.JWT_SECRET);
    }
    if(user){
        next();
    }else{
        res.end();
    }
    
})
// router.post((req,res,next)=>{
//     const token=sessionStorage.getItem("token");
//     const user=jwt.verify(token,process.env.JWT_SECRET);  //user contains _id and contactNumber as contact
//     if(user){
//         next();
//     }else{
//         res.end();
//     }
    
// })
// router.patch((req,res,next)=>{
//     const token=sessionStorage.getItem("token");
//     const user=jwt.verify(token,process.env.JWT_SECRET);  //user contains _id and contactNumber as contact
//     if(user){
//         next();
//     }else{
//         res.end();
//     }
    
// })
// router.delete((req,res,next)=>{
//     const token=sessionStorage.getItem("token");
//     const user=jwt.verify(token,process.env.JWT_SECRET);  //user contains _id and contactNumber as contact
//     if(user){
//         next();
//     }else{
//         res.end();
//     }
    
// })
// router.post((req,res,next)=>{
//     const token=sessionStorage.getItem("token");
//     const user=jwt.verify(token,process.env.JWT_SECRET);  //user contains _id and contactNumber as contact
//     if(user){
//         console.log("hello");
//         next();
//     }else{
//         res.end();
//     }
    
// })
// module.exports=router;

// exports.authenticate=(()=>{
//     const token=req.headers.Authorisation.split(" ")[1];
//     const user=jwt.verify(token,process.env.JWT_SECRET);

// })
//const sessionstorage=require('sessionstorage');
const cookieParser=require('cookie-parser')
const express=require('express');
const router=express.Router();


router.get('/',(req,res)=>{
    res.clearCookie('token');
   // sessionstorage.removeItem('token');
    return res.redirect('/')
});

module.exports = router;
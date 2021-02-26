const sessionstorage=require('sessionstorage');
const express=require('express');
const router=express.Router();


router.get('/',(req,res)=>{
    sessionstorage.removeItem('token');
    return res.redirect('/')
});

module.exports = router;
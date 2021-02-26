const express=require('express');
const { userSignin } = require('../controllers/login');
const router=express.Router();

router.get('/',(req,res)=>{
    res.render('login')
});

router.post('/',userSignin);



module.exports=router;
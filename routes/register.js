const express=require('express');
const { userSignup } = require('../controllers/register');
const router=express.Router();

router.get('/',(req,res)=>{
    res.render('register')
})

router.post('/',userSignup)


module.exports=router;
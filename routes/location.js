const express=require('express');
const router=express.Router();

//const { isAuth } = require('../controllers/auth');
const { sendMessage } = require('../controllers/location');





router.post('/current',sendMessage);   //passing args to multiple middlewares

module.exports=router;
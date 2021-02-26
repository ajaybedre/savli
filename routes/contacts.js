const express=require('express');
const jwt =require('jsonwebtoken');
const { getContacts, addContact, deleteContacts } = require('../controllers/contacts');
const router=express.Router();



router.get("/",getContacts);


router.post('/add',addContact);

router.delete('/delete/:id',deleteContacts);

module.exports=router;

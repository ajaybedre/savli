const express=require('express');
const axios =require('axios');
//const { response } = require('express');



document.addEventListener('DOMContentLoaded',()=>{
  function loginUser(e){
    e.preventDefault();
    const username=req.body.username;
    const password=req.body.password;
  
    axios.post('/login',{
      username,
      password
    })
    .then(async(res)=>{
      await console.log(res);
    })
    .catch(err=>{
      alert(err);
    })
  };
  
  
  document.querySelector('#login-btn').addEventListener('click',loginUser(e));
},false)
'use strict:'
const mongoose=require('mongoose');
const bcrypt=require('bcrypt');


const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    contactNumber: {
      type: Number,
      required:true
    },
    hash_password:{
        type:String,
        required:true,
    }
},
{
    timestamps:true
})


userSchema.virtual("password")
.set(function(password){
    this.hash_password=bcrypt.hashSync(password,10);
});

userSchema.methods={
    Authenticate:function(password){
        //console.log(bcrypt.compareSync(password,this.hash_password));
        return bcrypt.compareSync(password,this.hash_password);
    }
}

const user=mongoose.model('user',userSchema);
module.exports = user;
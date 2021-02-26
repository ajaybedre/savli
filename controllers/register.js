
const user=require('../models/users');



exports.userSignup = async (req, res) => {
   try {
      var userExist=false;
      var isError=false;
      
      if (req.body.password != req.body.confirmPassword) {
        return res.status(200).json({ message: "Passwords are not matching" });
      }

      await user.findOne({
        $or: [{ username: req.body.username }, { email: req.body.email }],
      },function(err,data){
        if(data) userExist=true;
        if(err) isError=true;
      })
      if(userExist)
       return res.status(200).json({message:"User already exist"})
      if(isError)
       return res.status(200).json({message:"Something went wrong!!"})
     
     
      const _user=new user({
        username:req.body.username,
        email:req.body.email,
        contactNumber:req.body.contactNumber,
        password:req.body.password
      })
      await _user.save(function(err,data){
        if(err) return res.status(200).json({message:err})
        if(data) return res.status(200).json({redirectTo:'/login'});
      })
     
    } catch (error) {
      return res.status(200).json({ message:`Error ${error}` });
    }
  };
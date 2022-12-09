const authModel =require('../models/authModel')
let userRegister=async (req,res)=>{
  let {name,email,password}=req.body;
  try {
   if(name && email && password){
      let isUser=await authModel.findOne({email:email});
      if(!isUser){
         const newUser=authModel({
            name,
            email,
            password
         })
         const savedUser=await newUser.save();
         if(savedUser){
            res.send('registeration sucessful')
         }
      }
      else{
         res.send("user exist please login");
      }

   }else{
      res.send("dit not get username , password, email")
   }
  } catch (error) {
     res.send(error.message()) 
  }
}

let userLogin=async (req,res)=>{
 let {email,password}=req.body;
 if(email && password){
   let isEmail=await authModel.findOne({email:email});
   if(isEmail){
     res.send(isEmail)
   }else{
      res.send({message:"user does not exit"})
   }
 }
 else{
   res.send({message:"please enter email and password"})
 }
}

module.exports={
    userRegister,
    userLogin
}
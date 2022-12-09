let User=require('../Model/user')
let registerControler = async (req,res)=>{
    let user=new User(req.body)
    let result=await user.save();
    result = result.toObject();
 //    delete result.password;
     res.send(result)
}

let loginControler=async (req,res)=>{
    if(req.body.email && req.body.password){
        let user=await User.findOne(req.body).select('-password')
        if(user){
            res.send(user)
        }else{
            res.send({result:'user not found'})
        }
       }else{
        res.send({result:'user not found'})
    }
}
module.exports={
    registerControler,
    loginControler
   
}
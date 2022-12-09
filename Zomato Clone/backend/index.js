let express=require('express')
let cors=require('cors')
let User=require('./db/user');
const Allplans = require('./db/allplans');
const Plandetails = require('./db/plandetails');
require('./db/config')

const app=express();

app.use(cors())
app.use(express.json())

app.post('/register', async (req,res)=>{
   let user=new User(req.body);
   let result=await user.save();
   result = result.toObject();
//    delete result.password;
    res.send(result)
})

app.post('/login',async (req,res)=>{
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
 })

 app.get('/allplans', async (req,res)=>{
    let products=await Allplans.find();
    if(products.length>0){
        res.send(products);
    }else{
        res.send({'result':'product is empty'})
    }
})


app.post('/plandetail',async (req,res)=>{
    let user=new Plandetails(req.body)
   let result=await user.save();
   result = result.toObject();
    res.send(result)
})

app.get('/plandetail', async (req,res)=>{
    let products=await Plandetails.find();
    if(products.length>0){
        res.send(products);
    }else{
        res.send({'result':'product is empty'})
    }
})

// delete review 
app.delete('/plandetail/:id',async (req,res)=>{
    // res.send(req.params.id)
    const result=await Plandetails.deleteOne({_id:req.params.id})
    res.send(result)
})


app.listen(5000)
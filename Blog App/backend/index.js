let router=require('./routes/blog')
const cors=require('cors')
const express=require('express');
require('./db/config')

const app=express();
app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("con")
})

app.use('/api/v1',router)

app.listen(5000);
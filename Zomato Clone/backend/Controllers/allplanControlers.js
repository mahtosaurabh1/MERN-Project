let Allplans=require('../Model/allplans')

let allplanControler=async (req,res)=>{
    let products=await Allplans.find();
    if(products.length>0){
        res.send(products);
    }else{
        res.send({'result':'product is empty'})
    }
}

module.exports=allplanControler
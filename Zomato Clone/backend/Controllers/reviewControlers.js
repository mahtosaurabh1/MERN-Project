let reviewSchema=require('../Model/review')

let addreviewControler=async (req,res)=>{
    let user=new reviewSchema(req.body)
    let result=await user.save();
    result = result.toObject();
     res.send(result)
}

let getallReviewControler=async (req,res)=>{
    let products=await reviewSchema.find();
    if(products.length>0){
        res.send(products);
    }else{
        res.send({'result':'product is empty'})
    }
}

let deleteReviewControler=async (req,res)=>{
    const result=await reviewSchema.deleteOne({_id:req.params.id})
    res.send(result)
}

module.exports={
    addreviewControler,
    getallReviewControler,
    deleteReviewControler
}
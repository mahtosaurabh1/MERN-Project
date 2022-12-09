let  categorySchema=require('../models/categoryModel')
let getAllCategory=async (req,res)=>{
  try {
    let getallCategory=await categorySchema.find({});
    res.send(getallCategory);
  } catch (error) {
    res.send({message:error.message})
    
  }
}

let addNewCategory=async (req,res)=>{
   let {title}=req.body;
   try {
    let result=new categorySchema({title})
    result=await result.save();
    res.send("added")
   } catch (error) {
    res.send({message:error.message})
   }
}

module.exports={
    getAllCategory,
    addNewCategory
}
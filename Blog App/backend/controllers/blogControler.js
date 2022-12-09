let blogSchema=require('../models/blogModel')
let getAllBlog=async (req,res)=>{
  try {
    let result=await blogSchema.find({});
    res.send(result);
  } catch (error) {
    res.send(error.message)
  }
}

let addNewBlog=async (req,res)=>{
   let {title,category,descriptions,thumbnail}=req.body;
   try {
    if(title && category  && descriptions){
        let result=new blogSchema({
            title,
            category,
            descriptions,
            thumbnail,
            user
        })
        result=await result.save();
        if(result){
          res.send("blog added successful")
        }

    }else{
        res.send("all field are requires")
    }
    
   } catch (error) {
    res.send(error.message)
   }
}

let getSingleBlog=async (req,res)=>{
   let {id}=req.params;
   try {
    if(id){
       let result=await blogSchema.findById(id);
       res.send(result)
    }else{
      res.send("not found")
    }
    
   } catch (error) {
    res.send(error.message)
    
   }
    
}

module.exports={
    getAllBlog,
    addNewBlog,
    getSingleBlog
}
const mongoose=require('mongoose')

const blogSchema=new mongoose.Schema({
    title:String,
    category:{
        type:mongoose.Schema.Types.ObjectId,
        refer:"categories"
    },
    descriptions:String,
    thumbnail:String,
    user:{
        type:mongoose.Schema.Types.ObjectId,
        refer:"users"
    },
    password:String
})

module.exports = mongoose.model('blogs',blogSchema)
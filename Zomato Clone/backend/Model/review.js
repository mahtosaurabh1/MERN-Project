const mongoose=require('mongoose');

let reviewSchema=mongoose.Schema({
    review:String,
    rating:String
})

module.exports=mongoose.model('foodreview',reviewSchema);
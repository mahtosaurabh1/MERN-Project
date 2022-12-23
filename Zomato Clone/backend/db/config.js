const mongoose=require('mongoose');
const { pass } = require('../secrets');
// mongoose.connect('mongodb://127.0.0.1:27017/food-app').then(() => {
//     console.log("connected to database");
// })   //for mongodb compass

mongoose.connect(`mongodb+srv://saurabh:${pass}@cluster0.pbf2e5b.mongodb.net/?retryWrites=true&w=majority`).then(() => {
    console.log("connected to database");
})
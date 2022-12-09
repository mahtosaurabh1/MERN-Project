const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/food-app').then(() => {
    console.log("connected to database");
})

// mongoose.connect('mongodb+srv://foodappclone:<Password>@cluster0.zrcot9f.mongodb.net/?retryWrites=true&w=majority').then(() => {
//     console.log("connected to database");
// })
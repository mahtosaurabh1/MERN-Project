let mongoose=require('mongoose')

mongoose.connect('mongodb+srv://saurabh:Saurabh7@cluster0.samj9dl.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log("connected to database");
})
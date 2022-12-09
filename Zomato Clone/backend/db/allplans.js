const mongoose = require("mongoose");

const allPlanSchema = new mongoose.Schema({
  name: String,
  price: String,
  duration: String,
  discount: String,
  ratingsAverage: String

});

module.exports = mongoose.model("allplans", allPlanSchema); 

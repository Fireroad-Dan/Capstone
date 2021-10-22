const mongoose = require("mongoose");

const pizzaSchema = new mongoose.Schema({
  paramOne: String,
  paramTwo: String,
  paramThree: String,
  paramFour: [String],
});

const Pizza = mongoose.model("Pizza", pizzaSchema);

module.exports = {
  model: Pizza,
  schema: pizzaSchema,
};
const mongoose = require("mongoose");

const feedSchema = new mongoose.Schema({
  feedName: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, required: true },
  pet: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true }, // store image URL or path
}, { timestamps: true });

module.exports = mongoose.model("Feed", feedSchema);

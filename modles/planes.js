const mongoose = require("mongoose");

// Создаем схему
const planeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  capacity: {
    type: String,
    required: true,
  },
  planeImage: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Plane", planeSchema);

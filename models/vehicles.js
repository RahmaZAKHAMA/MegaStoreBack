const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const vehiclesSchema = new Schema(
  {
    categorie: {
      type: String,
      required: true,
    },
    subcategorie: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    fuel: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    admin: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
  {
    collection: "vehicles",
  }
);

module.exports = Vehicle = mongoose.model("Vehicle", vehiclesSchema);

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const realestateSchema = new Schema(
  {
    categorie: {
      type: String,
      required: true,
    },
    name: {
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
    collection: "realestate",
  }
);

module.exports = RealEstate = mongoose.model("RealEstate", realestateSchema);

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const fashionSchema = new Schema(
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
    }
    
  },
  {
    timestamps: true,
  },
  {
    collection: "fashion",
  }
);

module.exports = Fashion = mongoose.model("Fashion", fashionSchema);

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const homegardenSchema = new Schema(
  {
    categorie: {
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
    },
  },
  {
    timestamps: true,
  },
  {
    collection: "homegarden",
  }
);

module.exports = HomeGarden = mongoose.model("HomeGarden", homegardenSchema);

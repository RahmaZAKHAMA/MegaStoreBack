const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const vacationSchema = new Schema(
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
    collection: "vacation",
  }
);

module.exports = Vacation = mongoose.model("Vacation", vacationSchema);

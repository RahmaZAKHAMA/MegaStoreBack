const RealEstate = require("../models/realestate");

exports.testRealEstate = async (req, res) => {
  try {
    res.status(200).send("Test OK realestate!");
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.addRealEstate = async (req, res) => {
  try {
    const {
      categorie,
      name,
      year,
      price,
      image,
      description,
      admin,
    } = req.body;
    const newRealEstate = new RealEstate({
      categorie,
      name,
      year,
      price,
      image,
      description,
      admin,
    });
    await newRealEstate.save();
    res
      .status(200)
      .send({ msg: "RealEstate added successfully", newRealEstate });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getRealEstates = async (req, res) => {
  try {
    const RealEstates = await RealEstate.find();
    if (RealEstates.length == 0) {
      return res.status(404).send({ msg: "No RealEstate found" });
    }
    res.status(200).send(RealEstates);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getRealEstateById = async (req, res) => {
  try {
    const { id } = req.params;
    const foundRealEstate = await RealEstate.findById(id);
    if (!foundRealEstate) {
      return res.status(404).send({ msg: "RealEstate not found" });
    }
    res.status(200).send(foundRealEstate);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteRealEstate = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRealEstate = await RealEstate.findByIdAndDelete(id);
    res
      .status(200)
      .send({ msg: "RealEstate deleted successfully", deletedRealEstate });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.editRealEstate = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      categorie,
      name,
      year,
      price,
      image,
      description,
      admin,
    } = req.body;
    const editedRealEstate = await RealEstate.findByIdAndUpdate(
      id,
      { categorie, name, year, price, image, description,admin },
      { new: true }
    );
    res
      .status(200)
      .send({ msg: "RealEstate edited successfully", editedRealEstate });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getRealEstatesByCategory = async (req, res) => {
  try {
    const { category } = req.params; // Get the category from the URL parameters
    const realEstates = await RealEstate.find({ categorie: category }); // Query by category

    if (realEstates.length === 0) {
      return res
        .status(404)
        .send({ msg: "No real estate found for this category" });
    }

    res.status(200).send(realEstates); // Return the found real estates
  } catch (error) {
    res.status(500).send({ msg: "Error fetching real estates", error });
  }
};

exports.getRealEstatesByCategoryAndSubcategory = async (req, res) => {
  try {
    const { category, subcategory } = req.params; // Get both parameters from the URL
    const RealEstates = await RealEstate.find({
      categorie: category,
      subcategorie: subcategory, // Ensure your schema has this field
    });

    if (RealEstates.length === 0) {
      return res
        .status(404)
        .send({ msg: "No RealEstate found for this category and subcategory" });
    }

    res.status(200).send(RealEstates); // Return the found fashion items
  } catch (error) {
    res.status(500).send({ msg: "Error fetching RealEstate", error });
  }
};

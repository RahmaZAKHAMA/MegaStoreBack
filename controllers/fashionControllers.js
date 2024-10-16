const Fashion = require("../models/fashion");

exports.testFashion = async (req, res) => {
  try {
    res.status(200).send("Test OK Fashion!");
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.addFashion = async (req, res) => {
  try {
    const { categorie,subcategorie, name, price, image, description,admin } = req.body;
    const newFashion = new Fashion({
      categorie,
      subcategorie,
      name,
      price,
      image,
      description,
      admin,
    });
    await newFashion.save();
    res.status(200).send({ msg: "Fashion added successfully", newFashion });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getFashions = async (req, res) => {
  try {
    const Fashions = await Fashion.find();
    if (Fashions.length == 0) {
      return res.status(404).send({ msg: "No Fashion found" });
    }
    res.status(200).send(Fashions);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getFashionById = async (req, res) => {
  try {
    const { id } = req.params;
    const foundFashion = await Fashion.findById(id);
    if (!foundFashion) {
      return res.status(404).send({ msg: "Fashion not found" });
    }
    res.status(200).send(foundFashion);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteFashion = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedFashion = await Fashion.findByIdAndDelete(id);
    res
      .status(200)
      .send({ msg: "Fashion deleted successfully", deletedFashion });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.editFashion = async (req, res) => {
  try {
    const { id } = req.params;
    const { categorie,subcategorie, name, price, image, description,admin } = req.body;
    const editedFashion = await Fashion.findByIdAndUpdate(
      id,
      { categorie,subcategorie, name, price, image, description,admin },

      { new: true }
    );
    res.status(200).send({ msg: "Fashion edited successfully", editedFashion });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getFashionByCategory = async (req, res) => {
  try {
    const { category } = req.params; 
    const Fashions = await Fashion.find({ categorie: category}); 

    if (Fashions.length === 0) {
      return res
        .status(404)
        .send({ msg: "No Fashion found for this category" });
    }

    res.status(200).send(Fashions); 
  } catch (error) {
    res.status(500).send({ msg: "Error fetching Fashion", error });
  }
};

exports.getFashionByCategoryAndSubcategory = async (req, res) => {
  try {
    const { category, subcategory } = req.params; // Get both parameters from the URL
    const fashions = await Fashion.find({
      categorie: category,
      subcategorie: subcategory, // Ensure your schema has this field
    });

    if (fashions.length === 0) {
      return res
        .status(404)
        .send({ msg: "No Fashion found for this category and subcategory" });
    }

    res.status(200).send(fashions); // Return the found fashion items
  } catch (error) {
    res.status(500).send({ msg: "Error fetching Fashion", error });
  }
};
exports.getFashionByAdminId = async (req, res) => {
  try {
    const { id } = req.params;
    const Fashions = await Fashion.find({ admin: id });

    if (Fashions.length === 0) {
      return res
        .status(404)
        .send({ msg: "No Fashion found for this category" });
    }

    res.status(200).send(Fashions);
  } catch (error) {
    res.status(500).send({ msg: "Error fetching Fashion", error });
  }
};


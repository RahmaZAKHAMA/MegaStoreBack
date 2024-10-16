const HomeGarden = require("../models/homegarden");

exports.testHomeGarden = async (req, res) => {
  try {
    res.status(200).send("Test OK HomeGarden!");
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.addHomeGarden = async (req, res) => {
  try {
    const { categorie, name, price, image, description,admin } = req.body;
    const newHomeGarden = new HomeGarden({
      categorie,
      name,
      price,
      image,
      description,
      admin,
    });
    await newHomeGarden.save();
    res
      .status(200)
      .send({ msg: "HomeGarden added successfully", newHomeGarden });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getHomeGardens = async (req, res) => {
  try {
    const HomeGardens = await HomeGarden.find();
    if (HomeGardens.length == 0) {
      return res.status(404).send({ msg: "No HomeGarden found" });
    }
    res.status(200).send(HomeGardens);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getHomeGardenById = async (req, res) => {
  try {
    const { id } = req.params;
    const foundHomeGarden = await HomeGarden.findById(id);
    if (!foundHomeGarden) {
      return res.status(404).send({ msg: "HomeGarden not found" });
    }
    res.status(200).send(foundHomeGarden);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteHomeGarden = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedHomeGarden = await HomeGarden.findByIdAndDelete(id);
    res
      .status(200)
      .send({ msg: "HomeGarden deleted successfully", deletedHomeGarden });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.editHomeGarden = async (req, res) => {
  try {
    const { id } = req.params;
    const { categorie, name, price, image, description,admin } = req.body;
    const editedHomeGarden = await HomeGarden.findByIdAndUpdate(
      id,
      { categorie, name, price, image, description,admin },
      { new: true }
    );
    res
      .status(200)
      .send({ msg: "HomeGarden edited successfully", editedHomeGarden });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getHomeGardenByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const HomeGardens = await HomeGarden.find({ categorie: category }); // Query by category

    if (HomeGardens.length === 0) {
      return res
        .status(404)
        .send({ msg: "No HomeGarden found for this category" });
    }

    res.status(200).send(HomeGardens);
  } catch (error) {
    res.status(500).send({ msg: "Error fetching HomeGarden", error });
  }
};

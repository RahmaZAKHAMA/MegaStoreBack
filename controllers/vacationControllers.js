const Vacation = require("../models/vacation");

exports.testVacation = async (req, res) => {
  try {
    res.status(200).send("Test OK Vacation!");
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.addVacation = async (req, res) => {
  try {
    const { categorie, name, price, image, description,admin } = req.body;
    const newVacation = new Vacation({
      categorie,
      name,
      price,
      image,
      description,
      admin,
    });
    await newVacation.save();
    res.status(200).send({ msg: "Vacation added successfully", newVacation });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getVacations = async (req, res) => {
  try {
    const Vacations = await Vacation.find();
    if (Vacations.length == 0) {
      return res.status(404).send({ msg: "No Vacation found" });
    }
    res.status(200).send(Vacations);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getVacationById = async (req, res) => {
  try {
    const { id } = req.params;
    const foundVacation = await Vacation.findById(id);
    if (!foundVacation) {
      return res.status(404).send({ msg: "Vacation not found" });
    }
    res.status(200).send(foundVacation);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteVacation = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedVacation = await Vacation.findByIdAndDelete(id);
    res
      .status(200)
      .send({ msg: "Vacation deleted successfully", deletedVacation });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.editVacation = async (req, res) => {
  try {
    const { id } = req.params;
    const { categorie, name, price, image, description,admin } = req.body;
    const editedVacation = await Vacation.findByIdAndUpdate(
      id,
      { categorie, name, price, image, description,admin },
      { new: true }
    );
    res
      .status(200)
      .send({ msg: "Vacation edited successfully", editedVacation });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getVacationByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const Vacations = await Vacation.find({ categorie: category }); // Query by category

    if (Vacations.length === 0) {
      return res
        .status(404)
        .send({ msg: "No Vacation found for this category" });
    }

    res.status(200).send(Vacations);
  } catch (error) {
    res.status(500).send({ msg: "Error fetching Vacation", error });
  }
};

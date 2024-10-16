const Vehicle = require("../models/vehicles");

exports.test = async (req, res) => {
  try {
    res.status(200).send("Test OK vehicles!");
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.addVehicle = async (req, res) => {
  try {
    const {
      categorie,
      subcategorie,
      name,
      brand,
      model,
      year,
      price,
      fuel,
      image,
      description,
      admin,
    } = req.body;
    const newVehicle = new Vehicle({
      categorie,
      subcategorie,
      name,
      brand,
      model,
      year,
      price,
      fuel,
      image,
      description,
      admin,
    });
    await newVehicle.save();
    res.status(200).send({ msg: "vehicle added successfully", newVehicle });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    if (vehicles.length==0) {
      return res.status(404).send({ msg: "No vehicle found" });
    }
    res.status(200).send(vehicles);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getVehiclesById = async (req, res) => {
  try {
    const { id } = req.params;
    const foundVehicle = await Vehicle.findById(id);
    if (!foundVehicle) {
      return res.status(404).send({ msg: "vehicle not found" });
    }
    res.status(200).send(foundVehicle);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteVehicles = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedVehicle = await Vehicle.findByIdAndDelete(id);
    res.status(200).send({ msg: "Vehicle deleted successfully", deletedVehicle });
  } catch (error) {
    
    res.status(500).send(error);
  }
};

exports.editVehicles = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      categorie,
      name,
      brand,
      model,
      year,
      price,
      fuel,
      image,
      description,
      admin,
    } = req.body;
    const editedVehicle = await Vehicle.findByIdAndUpdate(
      id,
      { categorie,name,brand, model, year, price, fuel, image, description,admin },
      { new: true }
    );
    res.status(200).send({ msg: "Vehicle edited successfully", editedVehicle });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getVehicleByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const vehicles = await Vehicle.find({ categorie: category });

    if (vehicles.length === 0) {
      return res
        .status(404)
        .send({ msg: "No vehicle found for this category" });
    }

    res.status(200).send(vehicles);
  } catch (error) {
    res.status(500).send({ msg: "Error fetching vehicle", error });
  }
};

exports.getVehicleByCategoryAndSubcategory = async (req, res) => {
  try {
    const { category, subcategory } = req.params; // Get both parameters from the URL
    const vehicles = await Vehicle.find({
      categorie: category,
      subcategorie: subcategory, // Ensure your schema has this field
    });

    if (vehicles.length === 0) {
      return res
        .status(404)
        .send({ msg: "No vehicles found for this category and subcategory" });
    }

    res.status(200).send(vehicles); // Return the found fashion items
  } catch (error) {
    res.status(500).send({ msg: "Error fetching vehicles", error });
  }
};


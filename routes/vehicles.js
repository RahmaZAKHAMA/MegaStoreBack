const express = require('express');
const {
  addVehicle,
  test,
  getVehicles,
  getVehiclesById,
  deleteVehicles,
  editVehicles,
  getVehicleByCategory,
  getVehicleByCategoryAndSubcategory,
} = require("../controllers/vehiclesControllers");


const router = express.Router();

router.get('/test', test)
router.post("/addVehicle", addVehicle);
router.get("/getVehicles", getVehicles);
router.get("/getVehiclesById/:id", getVehiclesById);
router.delete("/deleteVehicles/:id", deleteVehicles);
router.put("/editVehicles/:id", editVehicles);
router.get("/getVehicleByCategory/:category", getVehicleByCategory); 
router.get(
  "/getVehicleByCategoryAndSubcategory/:category/:subcategory",
  getVehicleByCategoryAndSubcategory
);
module.exports = router
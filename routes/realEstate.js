const express = require('express');
const {
  addRealEstate,
  testRealEstate,
  getRealEstates,
  getRealEstateById,
  deleteRealEstate,
  editRealEstate,
  getRealEstatesByCategory,
  
} = require("../controllers/realEstateControllers");

const router = express.Router();

router.get("/testRealEstate", testRealEstate);
router.post("/addRealEstate", addRealEstate);
router.get("/getRealEstates", getRealEstates);
router.get("/getRealEstateById/:id", getRealEstateById);
router.delete("/deleteRealEstate/:id", deleteRealEstate);
router.put("/editRealEstate/:id", editRealEstate);
router.get("/getRealEstatesByCategory/:category", getRealEstatesByCategory); 


module.exports = router
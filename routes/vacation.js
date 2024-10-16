const express = require('express');
const {
  addVacation,
  testVacation,
  getVacations,
  getVacationById,
  deleteVacation,
  editVacation,
  getVacationByCategory,
} = require("../controllers/vacationControllers");

const router = express.Router();

router.get("/testVacation", testVacation);
router.post("/addVacation", addVacation);
router.get("/getVacations", getVacations);
router.get("/getVacationById/:id", getVacationById);
router.delete("/deleteVacation/:id", deleteVacation);
router.put("/editVacation/:id", editVacation);
router.get("/getVacationByCategory/:category", getVacationByCategory); 
module.exports = router
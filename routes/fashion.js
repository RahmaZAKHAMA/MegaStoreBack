const express = require('express');
const {
  addFashion,
  testFashion,
  getFashions,
  getFashionById,
  deleteFashion,
  editFashion,
  getFashionByCategory,
  getFashionByCategoryAndSubcategory,
  getFashionByAdminId,
} = require("../controllers/fashionControllers");

const router = express.Router();

router.get("/testFashion", testFashion);
router.post("/addFashion", addFashion);
router.get("/getFashions", getFashions);
router.get("/getFashionById/:id", getFashionById);
router.delete("/deleteFashion/:id", deleteFashion);
router.put("/editFashion/:id", editFashion);
router.get("/getFashionByCategory/:category", getFashionByCategory); 
router.get(
  "/getFashionByCategoryAndSubcategory/:category/:subcategory",
  getFashionByCategoryAndSubcategory
);
router.get("/getFashionByAdminId/:id", getFashionByAdminId);
module.exports = router

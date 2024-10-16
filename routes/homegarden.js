const express = require('express');
const {
  addHomeGarden,
  testHomeGarden,
  getHomeGardens,
  getHomeGardenById,
  deleteHomeGarden,
  editHomeGarden,
  getHomeGardenByCategory,
} = require("../controllers/HomeGardenControllers ");

const router = express.Router();

router.get("/testHomeGarden", testHomeGarden);
router.post("/addHomeGarden", addHomeGarden);
router.get("/getHomeGardens", getHomeGardens);
router.get("/getHomeGardenById/:id", getHomeGardenById);
router.delete("/deleteHomeGarden/:id", deleteHomeGarden);
router.put("/editHomeGarden/:id", editHomeGarden);
router.get("/getHomeGardenByCategory/:category", getHomeGardenByCategory); 
module.exports = router
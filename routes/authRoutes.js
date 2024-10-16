const express = require("express");
const { test, register, login } = require("../controllers/authControllers");
const { registerValidation, validator } = require("../middlewares/validator");
const isAuth = require("../middlewares/isAuth");
const { getUserById } = require("../controllers/authControllers");

const router = express.Router();

router.get("/test", test);

router.post("/register", registerValidation(), validator, register);

router.post("/login", login);

// current Route
router.get('/current', isAuth, (req, res) => {
    res.send(req.user)
})
router.get("/getUserById/:id", getUserById
    
);
module.exports = router;
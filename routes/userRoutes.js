const express = require("express");
const router = express.Router();
const {
  getAllData,
  incomeCar,
  phonePrice,
  quote,
  carEmail,
  top10Cities,
} = require("../controllers/usercontrollers");

router.get("/data", getAllData);
router.get("/income-car", incomeCar);
router.get("/phone-price", phonePrice);
router.get("/quote", quote);
router.get("/car-email", carEmail);
router.get("/top10cities", top10Cities);

module.exports = router;

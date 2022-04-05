const express = require('express');
const { vaccinatedInfo , moreInfo , createPdf , fetchPdf } = require('../controllers/patientController');
const router = express.Router();
const { protect } = require('../middlewares/authMiddleware');

router.route("/patient/:aadhaar").get(vaccinatedInfo);
router.route("/patient/vaccineinfo/:id").get(moreInfo);
router.route("/create-pdf").post(createPdf);
router.route("/fetch-pdf").get(fetchPdf);

module.exports = router;
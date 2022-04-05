const express = require('express');
const { getVaccinationInfo , getVaccineInfo , getPatientInfo} = require('../controllers/inspectorController');
const router = express.Router();

router.route('/inspector/:aadhaar').get(getVaccinationInfo);
router.route('/inspector/:aadhaar').post(getPatientInfo);
router.route('/inspector').get(getVaccineInfo);

module.exports = router;
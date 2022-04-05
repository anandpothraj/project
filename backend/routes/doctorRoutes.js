const express = require('express');
const { searchPatient, addVaccine , getVaccines , getVaccinated , deleteVaccine, fetchSingleVaccine , editVaccine } = require('../controllers/doctorController');
const router = express.Router();

router.route('/doctor').post(searchPatient).get(getVaccines);
router.route('/doctor/vaccinate').post(getVaccinated);
router.route('/doctor/addvaccine').post(addVaccine);
router.route('/doctor/vaccineinfo').get(getVaccines);
router.route('/doctor/vaccineinfo/:id').delete(deleteVaccine);
router.route('/doctor/vaccine/edit/:id').get(fetchSingleVaccine).put(editVaccine);

module.exports = router;
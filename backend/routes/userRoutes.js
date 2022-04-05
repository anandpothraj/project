const express = require('express');
const { registerUser, authUser, checkAadhaar, loginFirst , editUser ,  userExists  , deleteUser , editCredentials , forgetPassword, forgetSecretCode } = require('../controllers/userControllers');
const router = express.Router();


router.route('/register').post(registerUser);
router.route('/register/checkaadhaar').post(checkAadhaar);
router.route('/login/first').post(loginFirst);
router.route('/login').post(authUser);
router.route('/editprofile').put(editUser);
router.route('/deleteprofile/:aadhaar').get(userExists);
router.route('/deleteprofile').post(deleteUser);
router.route('/editcredentials').post(editCredentials);
router.route('/forgetpassword').post(forgetPassword);
router.route('/forgetsecretcode').post(forgetSecretCode);

module.exports = router;
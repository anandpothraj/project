const asyncHandler  = require('express-async-handler');
const Vaccinated = require('../models/vaccinatedModel');
const User = require('../models/userModel');
const Vaccine = require('../models/vaccineModel');

const getVaccinationInfo = asyncHandler(async (req,res) => {
    const aadhaar = req.params.aadhaar;
    const vaccines = await Vaccinated.find({aadhaar});
    if(vaccines.length > 0){
        res.json(vaccines);
    }
    else{
        res.status(400);
        res.err({
            msg:"No Vaccine Taken"
        })
    }
});

const getPatientInfo = asyncHandler(async (req,res) => {
    const aadhaar = req.params.aadhaar;
    const user = await User.findOne({aadhaar});
    if(user){
        res.json({
            accountType:user.accountType,
            name:user.name,
            age:user.age,
            gender:user.gender,
            aadhaar:user.aadhaar,
        })
    }
    else{
        res.status(400);
        throw new Error("Error!!!! Invalid Aadhaar Number or Patient does not exist");
    } 
});

const getVaccineInfo = asyncHandler(async (req,res) => {

    const vaccines = await Vaccine.find({});

    if(vaccines){
        res.json(vaccines)
    }else{
        res.status(400);
        throw new Error("Error Occured During fetching Vaccine");
    } 
})

module.exports = { getPatientInfo , getVaccinationInfo , getVaccineInfo} ;




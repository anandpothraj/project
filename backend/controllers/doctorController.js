const asyncHandler  = require('express-async-handler');
const User = require('../models/userModel');
const Vaccine = require('../models/vaccineModel');
const Vaccinated = require('../models/vaccinatedModel');
const generateToken = require("../utils/generateToken");

const searchPatient = asyncHandler(async (req,res) => {

    const { aadhaar } = req.body;

    const user = await User.findOne({aadhaar});

    if(user){
        res.json({
            _id:user._id,
            accountType:user.accountType,
            name:user.name,
            email:user.email,
            phone:user.phone,
            age:user.age,
            dob:user.dob,
            gender:user.gender,
            aadhaar:user.aadhaar,
            token:generateToken(user._id),
        })
    }
    else{
        res.status(400);
        throw new Error("Error!!!! Invalid Aadhaar Number or Patient does not exist");
    } 
});

const addVaccine = asyncHandler(async (req,res) => {

    const { vaccineName , noOfDose , timeGap , addedBy , addedOn  } = req.body;

    const vaccineExists = await Vaccine.findOne({ vaccineName });

    if(vaccineExists){
        res.status(400);
        throw new Error("Vaccine Already Exists");
    }

    const vaccine = await Vaccine.create({
        vaccineName , noOfDose , timeGap , addedBy , addedOn 
    });

    if(vaccine) {
        res.json({
            _id:vaccine._id,
            vaccineName:vaccine.vaccineName,
            noOfDose:vaccine.noOfDose,
            timeGap:vaccine.timeGap,
            addedBy:vaccine.addedBy, 
            addedOn:vaccine.addedOn 
        })
    }else{
        res.status(400);
        throw new Error("Error Occured During Adding New Vaccine");
    }

});

const getVaccines = asyncHandler(async (req,res) => {
    
    const vaccines = await Vaccine.find({});

        if(vaccines){
            res.json(vaccines)
        }else{
            res.status(400);
            throw new Error("Error Occured During fetching Vaccine");
        }        
});

const getVaccinated = asyncHandler(async (req,res) => {

    const { aadhaar , patientName , patientAge , patientGender , vaccineName , totalNoOfDose ,  nextDoseOn , noOfDose , hospital , doctorName , vaccinatedOn } = req.body;

    let partiallyVaccinated ;
    let fullyVaccinated ;
    let remainedNoOfDose ;

    if(noOfDose === totalNoOfDose){
        partiallyVaccinated = false;
        fullyVaccinated = true;
        remainedNoOfDose = 0;
    }
    else{
        partiallyVaccinated = true;
        fullyVaccinated = false;
        remainedNoOfDose = totalNoOfDose - noOfDose;
    }

        const vaccinated = await Vaccinated.create({
            aadhaar , patientName , patientAge , patientGender , vaccineName , totalNoOfDose ,  nextDoseOn , noOfDose , hospital , doctorName , vaccinatedOn , partiallyVaccinated , fullyVaccinated , remainedNoOfDose 
        });

        if(vaccinated){
            res.json({
                msg:"Vaccinated successfully",
            })
        }
        else{
            res.status(400);
            res.json({
                msg:"not able to vaccinated",
            })
        }
});

const deleteVaccine = asyncHandler(async(req,res) => {
    console.log(req.params.id);
    const vaccine = await Vaccine.findById(req.params.id);
    
    if(vaccine){
        await vaccine.remove();
        res.json({message:"Vaccine Removed"});
    }else{
        res.status(401);
        throw new Error("Vaccine not found");
    }

})

const fetchSingleVaccine = asyncHandler(async (req,res) => {
    const vaccine = await Vaccine.findById(req.params.id);
    if(vaccine){
          res.json(vaccine);
    }else{
          res.status(400);
          res.json({
                msg:"No vaccine taken"
            })
    }
});


const editVaccine = asyncHandler(async (req, res) => {

    const { vaccineName , noOfDose, timeGap , addedBy } = req.body;

    const vaccine = await Vaccine.findById(req.params.id);

    if(vaccine){
        vaccine.vaccineName = vaccineName;
        vaccine.noOfDose = noOfDose;
        vaccine.timeGap = timeGap;
        vaccine.addedBy = addedBy;
        const updatedVaccine = await vaccine.save();
        res.json(updatedVaccine);
        
    }else{
        res.status(404);
        throw new Error("Vaccine not found");
    }
    
})

module.exports = { searchPatient , addVaccine , getVaccines , getVaccinated , deleteVaccine , fetchSingleVaccine , editVaccine} ;

    




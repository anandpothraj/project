const getVaccinated = asyncHandler(async (req,res) => {

    const { aadhaar , patientName , patientAge , patientGender , vaccineName , totalNoOfDose ,  nextDoseOn , noOfDose , hospital , doctorName , vaccinatedOn } = req.body;

    const partiallyVaccinated = true;
    const fullyVaccinated = false;
    const remainedNoOfDose = totalNoOfDose - 1;
    console.log(noOfDose);


    // Checking the patient havae already taken vaccine or not
    const previouslyVaccinated = await Vaccinated.find({aadhaar});


    // If the patient has already taken any vaccine then
    if(previouslyVaccinated.length > 0 ){

        // Fetching the name of the vaccine which patient has taken previously
        const objectWeNeed = previouslyVaccinated.filter((object) => {
            return object.vaccineName === vaccineName;
        })

        // if patient has taken different vaccine in the previous so vaccinating patient with current vaccine
        if(objectWeNeed.length === 0) {
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
        }
        else{
            // If the patient has taken same vaccine in previous 
            // So fetching the no of dose of the previous vaccine of same vaccine name


            if(noOfDose === 1){
                const doseWeNeed = objectWeNeed.filter((object) => {
                    return object.noOfDose === 1;
                })

                if(doseWeNeed.length === 0){
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
                }
                else{
                    res.status(400);
                    res.json({
                        msg:"You are already vaccinated",
                    })
                }
            }
            else if(noOfDose === 2){
                const doseWeNeed = objectWeNeed.filter((object) => {
                    return object.noOfDose === 2;
                })

                if(doseWeNeed.length === 0){
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
                }
                else{
                    res.status(400);
                    res.json({
                        msg:"You are already vaccinated",
                    })
                }
            }
            else if(noOfDose === 3){
                const doseWeNeed = objectWeNeed.filter((object) => {
                    return object.noOfDose === 3;
                })

                if(doseWeNeed.length === 0){
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
                }
                else{
                    res.status(400);
                    res.json({
                        msg:"You are already vaccinated",
                    })
                }
            }
            else if(noOfDose === 4){
                const doseWeNeed = objectWeNeed.filter((object) => {
                    return object.noOfDose === 4;
                })

                if(doseWeNeed.length === 0){
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
                }
                else{
                    res.status(400);
                    res.json({
                        msg:"You are already vaccinated",
                    })
                }

            }else{
                res.status(400);
                    res.json({
                        msg:"only support maximum 4 doses vaccine",
                    })
            }

            if(doseWeNeed.length === 0){
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
            }
            else{
                res.status(400);
                    res.json({
                        msg:"You are already vaccinated",
                    })
            }
        }
    }
    // if the patient has never taken any vaccine then
    else{
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
    }
        
});


module.exports = { searchPatient , addVaccine , getVaccines , getVaccinated} ;































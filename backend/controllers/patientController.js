const asyncHandler  = require('express-async-handler');
const Vaccinated = require('../models/vaccinatedModel');
const pdf = require('html-pdf');
const pdfTemplate = require('../documents');

const vaccinatedInfo = asyncHandler(async (req,res) => {
      const aadhaar = req.params.aadhaar;
      const vaccines = await Vaccinated.find({aadhaar});
      res.json(vaccines);
});

const moreInfo = asyncHandler(async (req,res) => {
      const vaccines = await Vaccinated.findById(req.params.id);
      if(vaccines){
            res.json(vaccines);
      }else{
            res.status(400);
            res.json({
                  msg:"No vaccine taken"
              })
      }
});

const createPdf = asyncHandler(async (req,res) => {
      pdf.create(pdfTemplate(req.body),{}).toFile('certificate.pdf',(err) => {
            if(err){
                  res.send(Promise.reject());
            }
                  res.send(Promise.resolve());
            });
});

const fetchPdf = asyncHandler(async (req,res) => {
      res.sendFile("C:\\uas\\certificate.pdf");
})



module.exports = { vaccinatedInfo , moreInfo , createPdf , fetchPdf } ;

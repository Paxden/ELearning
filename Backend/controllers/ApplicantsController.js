const Applicant = require("../models/Applicant");
const mongoose = require('mongoose')

// Get all Applicant
const getApplicants = async (req, res) => {
  const applicants = await Applicant.find({}).sort({ createdAt: -1 });
  res.status(200).json(applicants);
};

// Get a single Applicant
const getApplicant = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid ID format" });
  }

  const applicant = await Applicant.findById(id);

  if (!applicant) {
    res.status(404).json("No such applicant");
  } else {
    res.status(200).json(applicant);
  }
};

// Create new Applicant
const createApplicant = async (req, res) => {
  const { fullname, username, email, password, phone, gender } = req.body;

  try {
    const applicant = await Applicant.create({
      fullname,
      username,
      email,
      password,
      gender,
      phone
    });
    res.status(200).json(applicant);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete an Applicant
const deleteApplicant = async (req,res) => {

    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({ mssg: 'No such Applicant'})
    }

    const applicant = await Applicant.findOneAndDelete({ _id: id })

    res.status(200).json(applicant)
}

// Update an Applicant
const updateApplicant = async ( req,res ) => {

    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({mssg: 'No such Applicant'})
    }

    const applicant = await Applicant.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if(!applicant){
        res.status(404).json({mssg: 'No such Applicant'})
    }

    res.status(200).json(applicant)
}

module.exports = {
  getApplicants,
  getApplicant,
  createApplicant,
  deleteApplicant,
  updateApplicant
};

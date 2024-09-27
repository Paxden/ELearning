const express = require("express");
const {
  getApplicants,
  getApplicant,
  createApplicant,
  deleteApplicant,
  updateApplicant
} = require("../controllers/ApplicantsController");

const router = express.Router();

// Get all Applicants
router.get("/", getApplicants);

// Get a single applicant
router.get("/:id", getApplicant);

//register an applicant
router.post("/", createApplicant);

// Delete an applicant
router.delete("/:id",deleteApplicant);

// Update an applicant
router.patch("/:id", updateApplicant );

module.exports = router;

const mongoose = require('mongoose')

const Schema  = mongoose.Schema

const applicantSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,  
        match: [/\S+@\S+\.\S+/, 'Please use a valid email address']
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    gender: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        match: /^\d{11}$/   
    }
}, { timestamps: true })

const Applicant = mongoose.model('applicant', applicantSchema)

module.exports = Applicant
const mongoose = require('mongoose')

const ProfileSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: false
    },
    bio: {
        type: String,
        required: false
    },
    jobTitle: {
        type: String,
        required: false
    },
    privacy: {
        type: Boolean,
        required: false,
        default: true
    },
    followerCount: {
        type: String,
        required: false,
        default: "0"
    },
    followingCount: {
        type: String,
        required: false,
        default: "0"
    },
    likeCount: {
        type: String,
        required: false,
        default: "0"
    }
})
module.exports = mongoose.model('userprofiles', ProfileSchema)

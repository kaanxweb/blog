const mongoose = require('mongoose');
const siteSettingSchema = mongoose.Schema({
    siteTitle: {
         type: String,
          trim: true},
    siteDescription: {
        type: String,
        trim: true
    },
    siteKeywords: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    password: {
        type: String,
        trim: true
    },
    facebookUrl: {
        type: String,
        trim: true
    },
    linkedinUrl: {
        type: String,
        trim: true
    },
 githubUrl: {
    type: String,
    trim: true
 }
});

const SiteSetting = mongoose.model('setting', siteSettingSchema);

module.exports = SiteSetting;
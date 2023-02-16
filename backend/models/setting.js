const mongoose = require('mongoose');
const siteSettingSchema = mongoose.Schema({
    siteTitle: {
         type: String,
          required: true},
    siteDescription: {
        type: String,
        require: true,
        trim: true
    },
    siteKeywords: String,
    email: {
        type: String,
        trim: true
    },
    password: String,
    facebookUrl: String,
    linkedinUrl: String,
 githubUrl: String
});

const SiteSetting = mongoose.model('setting', siteSettingSchema);

module.exports = SiteSetting;
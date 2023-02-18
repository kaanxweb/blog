const Setting = require('../../models/setting');

exports.getSiteSettings = async (req, res) => {
    try {
        const settings = await Setting.findOne();

        if (settings) {
            res.status(200).json(settings);
        } else {
            res.status(400).json({ 
                error: 'Site settings not found.'
             });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
             error: error.message 
            });
    }
}

exports.updateSiteSettings = async (req, res) => {
    const {
        siteTitle,
         siteDescription,
          siteKeywords,
        email,
         password,
          facebookUrl,
        githubUrl,
         linkedinUrl
    } = req.body;

    try {
        const settings = await Setting.findOne();

        settings.siteTitle = siteTitle;
        settings.siteDescription = siteDescription;
        settings.siteKeywords = siteKeywords;
        settings.email = email;
        settings.password = password;
        settings.facebookUrl = facebookUrl;
        settings.githubUrl = githubUrl;
        settings.linkedinUrl = linkedinUrl;

        await settings.save();

        res.status(200).json(settings);
    } catch (error) {
console.error(              error);
        res.status(500).json({
errorStatus: true
        });
    }
}

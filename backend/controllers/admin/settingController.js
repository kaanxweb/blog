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

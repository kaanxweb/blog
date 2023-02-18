const Setting = require('../../models/setting');

exports.getSiteSettings = async (req, res) => {
    try {
        const settings = await Setting.findOne().select('-_id').exec();

res.status(200).json(settings);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: true
        });
    }
}
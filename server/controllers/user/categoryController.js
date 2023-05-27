const Category = require('../../models/category');

exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find()
        .select('-_id');

            res.status(200).json(categories);
            
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: true
        });
    }
}
const Category = require('../../models/category');

exports.createCategory = async (req, res) => {
    try {
        const { name } = req.body;

if (!name) return res.status(400).send('An error occurred!');

        const isExist = await Category.findOne({ name: name });

        if (isExist) {
            res.status(409).send('This category is already exist!');
        } else {
            const newCategory = await Category.create({
                name: name
            });
            res.status(201).json(newCategory);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: true
        });
    }
}

exports.deleteCategory = async (req, res) => {
    try {
        const isCategoryDeleted = await Category.findOneAndDelete({ slug: req.params.slug });

        if (isCategoryDeleted) {
            res.status(200).send('The category deleted successfully.');
        } else {
            res.status(404).send('Category not found!');
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: true
        });
    }
}
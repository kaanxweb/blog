const Category = require('../../models/category');

exports.createCategory = async (req, res) => {
    try {
        const { name } = req.body;

if (!name) {
    return res.status(400).json({
        message: 'An error occurred!'
    });
}

        const isExist = await Category.findOne({ name: name });

        if (isExist) {
            res.status(409).json({
                message: 'This category is already exist!'
            });
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
            res.status(200).json({
                message: 'The category deleted successfully.'
            });
        } else {
            res.status(404).json({
                message: 'Category not found!'
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: true
        });
    }
}

exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find().select('-_id');
        res.status(200).json(categories);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: true
        });
    }
}

exports.updateCategory = async (req, res) => {
    try {
        const { name } = req.body;

        if (!name) {
            return res.status(400).json({
                message: 'An error occurred!'
            });
        }

const category = await Category.findOne({ slug: req.params.slug });

        if (category) {
            category.name = name;

            await category.save();
         res.status(200).json(category);

        } else {
            res.status(404).json({
                message: 'Category not found!'
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: true
        });
    }
}
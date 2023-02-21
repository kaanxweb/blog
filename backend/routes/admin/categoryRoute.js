const express = require('express');
const categoryController = require('../../controllers/admin/categoryController');
const router = express.Router();

router.post('/categories', categoryController.createCategory);
router.delete('/categories/:slug', categoryController.deleteCategory);
router.get('/categories', categoryController.getAllCategories);

module.exports = router;
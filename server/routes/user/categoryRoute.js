const express = require('express');
const categoryController = require('../../controllers/user/categoryController');

const router = express.Router();

router.get('/categories', categoryController.getAllCategories);

module.exports = router;
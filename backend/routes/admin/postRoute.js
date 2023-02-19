const express = require('express');
const postController = require('../../controllers/admin/postController');
const router = express.Router();

router.post('/posts', postController.createPost);

module.exports = router;
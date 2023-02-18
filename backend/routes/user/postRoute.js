const express = require('express');
const postController = require('../../controllers/user/postController');
const router = express.Router();

router.get('/posts', postController.getAllPosts);

module.exports = router;
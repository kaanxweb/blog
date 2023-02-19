const express = require('express');
const postController = require('../../controllers/user/postController');
const router = express.Router();

router.get('/posts', postController.getAllPosts);
router.get('/posts/:slug', postController.getPost);

module.exports = router;
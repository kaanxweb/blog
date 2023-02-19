const express = require('express');
const postController = require('../../controllers/admin/postController');
const router = express.Router();

router.post('/posts', postController.createPost);
router.delete('/posts/:slug', postController.deletePost);

module.exports = router;
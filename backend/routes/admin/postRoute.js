const express = require('express');
const postController = require('../../controllers/admin/postController');
const router = express.Router();

router.post('/posts', postController.createPost);
router.delete('/posts/:slug', postController.deletePost);
router.put('/posts/:slug', postController.updatePost);

module.exports = router;
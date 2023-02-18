const Post = require('../../models/post');

exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().select('-_id')
        .sort('-createdAt');

        res.status(200).json(posts);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: true
        });
    }
}
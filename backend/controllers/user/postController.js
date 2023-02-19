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

exports.getPost = async (req, res) => {
    try {
        const post = await Post.findOne({ slug: req.params.slug }, { select: '-_id' });

        if (post) {

post.view++;
await post.save();

            res.status(200).json(post);
        } else {
            res.status(404).send('Post not found!');
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: true
        });
    }
}
const Post = require('../../models/post');

exports.createPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const newPost = await Post.create({
            title: title,
            content: content,
        });

        res.status(201).json(newPost);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: true,
            message: error.message
        });
    }
}

exports.deletePost = async (req, res) => {
    try {
        const isPostDeleted = await Post.findOneAndDelete({ slug: req.params.slug });

        if (isPostDeleted) {
            res.status(200).send('Post has been deleted successfully.');
        } else {
            res.status(404).send('An error occurred!');
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: true,
            message: error.message
        });
    }
}
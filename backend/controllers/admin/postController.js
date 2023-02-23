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

exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();

        res.status(200).json(posts);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: true
        });
    }
}

exports.updatePost = async (req, res) => {
    try {
        const post = await Post.findOne({ slug: req.params.slug });

        const { title, content } = req.body;


        if (post) {

post.title = title;
post.content = content;

await post.save();
res.status(200).json(post);
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
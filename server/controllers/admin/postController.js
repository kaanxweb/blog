const Post = require('../../models/post');

exports.createPost = async (req, res) => {
    try {
        const { title, content, category } = req.body;

if (!title || !content || !category) {
    return res.status(400).json({
        message: 'Please fill out all the fields!'
    });
}

        const isPostExist = await Post.findOne({ title: title });

        if (isPostExist) {
            res.status(409).json({
                message: 'This title is not available!'
            });
        } else {
            const newPost = await Post.create({
                title: title,
                content: content,
                category: category
            });
    
            res.status(201).json(newPost);
        }
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
            res.status(200).json({
                message: 'Post has been deleted successfully.'
            });
        } else {
            res.status(404).json({
                message: 'An error occurred!'
            });
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
            res.status(404).json({
                message: 'An error occurred!'
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: true,
            message: error.message
        });
    }
}
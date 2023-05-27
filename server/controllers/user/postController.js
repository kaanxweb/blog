const Category = require('../../models/category');
const Post = require('../../models/post');
const postFilter = require('../../helpers/filterPost');

exports.getAllPosts = async (req, res) => {
    try {

        const categorySlug = req.query.categories;
        const { search } = req.query;

        postFilter.model = Category;
        await postFilter.filterPost(categorySlug, search);
        const filter = await postFilter.applyFilter();

        const posts = await Post.find(filter)
        .select('-_id')
        .sort('-createdAt');

        if (posts.length) {
        res.status(200).json(posts);
        } else {
            res.status(404).json({
                message: 'No post found!'
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: true
        });
    }
}


exports.getPost = async (req, res) => {
    try {
        const post = await Post.findOneAndUpdate({ slug: req.params.slug },
             { $inc: { view: 1 } },
              { new: true })
              .select('-_id');

        if (post) {
            res.status(200).json(post);
        } else {
            res.status(404).json({
                message: 'Post not found!'
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: true
        });
    }
}

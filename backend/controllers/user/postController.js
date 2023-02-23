const Category = require('../../models/category');
const Post = require('../../models/post');

exports.getAllPosts = async (req, res) => {
    try {

        const titleQuery = req.query.title;
        const categorySlug = req.query.category;

        const category = await Category.findOne({ slug: categorySlug });

        let filter = {};


        if (titleQuery) {
            filter = { title: titleQuery };
        }
        if (categorySlug) {
            filter = { category: category._id };
        }

        if (!titleQuery && !categorySlug) {
            filter.title = "";
            filter.category = null;
        }
        
        const posts = await Post.find({
            $or: [
                { title: { $regex: '.*' + filter.title + '.*', $options: 'i' } },
                { category: filter.category }
              ]
        }).select('-_id')
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
        const post = await Post.findOneAndUpdate({ slug: req.params.slug },
             { $inc: { view: 1 } },
              { new: true })
              .select('-_id');

        if (post) {
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

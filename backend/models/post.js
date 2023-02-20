const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slugify = require('slugify');

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    content: {
        type: String,
        required: true,
        trim: true
    },
    view: {
        type: Number,
        default: 0
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'admin',
        required: false
    },
    slug: {
        type: String,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        immutable: true
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

postSchema.pre('validate', function (next) {
    this.slug = slugify(this.title, {
        lower: true,
        strict: true
    });
    next();
});

postSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    if (!this.createdAt) {
        this.createdAt = this.updatedAt;
    }
    next();
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
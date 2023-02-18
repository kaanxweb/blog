const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
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
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

postSchema.pre('validate', (next) => {
    this.updatedAt = Date.now();
    if (!this.createdAt) {
        this.createdAt = this.updatedAt;
    }
    next();
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
import Blog from '../models/Blog.js';

// @desc    Create a new blog post
// @route   POST /api/blogs
export const createPost = async (req, res, next) => {
    try {
        const post = await Blog.create(req.body);
        res.status(201).json({ success: true, data: post });
    } catch (error) {
        next(error);
    }
};

// @desc    Get all published posts (Public)
// @route   GET /api/blogs
export const getPublishedPosts = async (req, res, next) => {
    try {
        const posts = await Blog.find({ isPublished: true }).sort({ createdAt: -1 });
        res.status(200).json({ success: true, count: posts.length, data: posts });
    } catch (error) {
        next(error);
    }
};

// @desc    Get ALL posts including drafts (Admin)
// @route   GET /api/blogs/admin
export const getAllPostsAdmin = async (req, res, next) => {
    try {
        const posts = await Blog.find().sort({ createdAt: -1 });
        res.status(200).json({ success: true, count: posts.length, data: posts });
    } catch (error) {
        next(error);
    }
};

// @desc    Update a blog post (Admin)
// @route   PUT /api/blogs/:id
export const updatePost = async (req, res, next) => {
    try {
        const post = await Blog.findByIdAndUpdate(req.params.id, req.body, {
            new: true, // Returns the updated document
            runValidators: true,
        });

        if (!post) {
            res.status(404);
            throw new Error('Blog post not found');
        }

        res.status(200).json({ success: true, data: post });
    } catch (error) {
        next(error);
    }
};

// @desc    Delete a blog post (Admin)
// @route   DELETE /api/blogs/:id
export const deletePost = async (req, res, next) => {
    try {
        const post = await Blog.findByIdAndDelete(req.params.id);
        if (!post) {
            res.status(404);
            throw new Error('Blog post not found');
        }
        res.status(200).json({ success: true, message: 'Blog post deleted successfully' });
    } catch (error) {
        next(error);
    }
};
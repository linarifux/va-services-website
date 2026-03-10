import express from 'express';
import { createPost, getPublishedPosts, getAllPostsAdmin, updatePost, deletePost } from '../controllers/blogController.js';
import { protect, admin } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/')
    .post(protect, admin, createPost)
    .get(getPublishedPosts); // Public

router.route('/admin')
    .get(protect, admin, getAllPostsAdmin); // Admin gets drafts too

router.route('/:id')
    .put(protect, admin, updatePost)
    .delete(protect, admin, deletePost);

export default router;
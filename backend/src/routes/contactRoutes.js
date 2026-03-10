import express from 'express';
import { submitMessage, getMessages, deleteMessage, updateMessageStatus } from '../controllers/contactController.js';
import { protect, admin } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/')
    .post(submitMessage)
    .get(protect, admin, getMessages);

router.route('/:id')
    .delete(protect, admin, deleteMessage);

// New route specifically for status updates
router.route('/:id/status')
    .put(protect, admin, updateMessageStatus);

export default router;
import Contact from '../models/Contact.js';
import sendEmail from '../utils/sendEmail.js';

// @desc    Submit a new contact message & trigger emails
// @route   POST /api/contacts
export const submitMessage = async (req, res, next) => {
    try {
        const { name, email, serviceOfInterest, message } = req.body;
        
        // 1. Save to database
        const newMessage = await Contact.create({ name, email, serviceOfInterest, message });
        
        // 2. Send Email Alert to Admin (You)
        try {
            await sendEmail({
                email: 'naimntech@gmail.com', // Your receiving email
                subject: `New Lead: ${serviceOfInterest} from ${name}`,
                html: `
                    <h2>New Inquiry Received</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Service:</strong> ${serviceOfInterest}</p>
                    <p><strong>Message:</strong><br/> ${message}</p>
                    <br/>
                    <a href="http://localhost:5173/admin/messages/${newMessage._id}">View in Dashboard</a>
                `,
            });

            // 3. Send Auto-Reply to the Client
            await sendEmail({
                email: email, // The client's email
                subject: `Thank you for contacting NaimNTech`,
                html: `
                    <div style="font-family: sans-serif; color: #2c2b2a;">
                        <h2>Hi ${name},</h2>
                        <p>Thank you for reaching out regarding <strong>${serviceOfInterest}</strong>.</p>
                        <p>We have received your inquiry and our team is currently reviewing your project details. We aim to respond to all inquiries within 24 hours to schedule a discovery call.</p>
                        <p>Best regards,<br/><strong>The NaimNTech Team</strong></p>
                    </div>
                `,
            });
        } catch (emailError) {
            console.error('Email could not be sent:', emailError);
            // We don't fail the request if the email fails, we still return success to the user since it saved to DB
        }

        res.status(201).json({ success: true, data: newMessage });
    } catch (error) {
        next(error);
    }
};

// @desc    Get all contact messages (Admin)
// @route   GET /api/contacts
export const getMessages = async (req, res, next) => {
    try {
        const messages = await Contact.find().sort({ createdAt: -1 });
        res.status(200).json({ success: true, count: messages.length, data: messages });
    } catch (error) {
        next(error);
    }
};

// @desc    Update message status (Admin)
// @route   PUT /api/contacts/:id/status
export const updateMessageStatus = async (req, res, next) => {
    try {
        const { status } = req.body;
        
        // Ensure status is valid based on your Mongoose Enum
        if (!['Pending', 'In Progress', 'Resolved'].includes(status)) {
            res.status(400);
            throw new Error('Invalid status value');
        }

        const message = await Contact.findByIdAndUpdate(
            req.params.id, 
            { status }, 
            { new: true, runValidators: true }
        );

        if (!message) {
            res.status(404);
            throw new Error('Message not found');
        }

        res.status(200).json({ success: true, data: message });
    } catch (error) {
        next(error);
    }
};

// @desc    Delete a message (Admin)
// @route   DELETE /api/contacts/:id
export const deleteMessage = async (req, res, next) => {
    try {
        const message = await Contact.findByIdAndDelete(req.params.id);
        if (!message) {
            res.status(404);
            throw new Error('Message not found');
        }
        res.status(200).json({ success: true, message: 'Message deleted successfully' });
    } catch (error) {
        next(error);
    }
};
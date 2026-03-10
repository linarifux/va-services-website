import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import connectDB from './config/db.js';
import { errorHandler, notFound } from './middlewares/errorHandler.js';

// Route imports
import contactRoutes from './routes/contactRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
import authRoutes from './routes/authRoutes.js';

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Security and utility middlewares
app.use(helmet());
app.use(
    cors({
        origin: ['http://localhost:8000', 'http://localhost:5173'], // Adjust this in production
    })
)
app.use(express.json()); 

// Mount Routers
app.use('/api/auth', authRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/blogs', blogRoutes);

// Basic health check route
app.get('/', (req, res) => {
    res.send('NaimNTech API is running...');
});

// Error Handling Middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
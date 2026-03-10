import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
    try {
        // Clear existing users
        await User.deleteMany();

        // Create the admin user
        const adminUser = await User.create({
            name: 'Naimul Islam',
            email: 'admin@naimntech.com',
            password: 'adminpassword123', // Change this in production
            isAdmin: true
        });

        console.log(`Admin User Created! Email: ${adminUser.email}`);
        process.exit();
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

// Run the script
importData();
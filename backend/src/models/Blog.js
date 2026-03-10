import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    content: { type: String, required: true }, // Store HTML or Markdown here
    author: { type: String, default: 'Admin' },
    isPublished: { type: Boolean, default: false },
    tags: [{ type: String }]
}, { timestamps: true });

export default mongoose.model("Blog", blogSchema);
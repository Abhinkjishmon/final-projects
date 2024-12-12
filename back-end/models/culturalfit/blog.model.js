const mongoose = require("mongoose");

const { Schema } = mongoose;

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  categories: [{ type: Schema.Types.ObjectId, ref: "Category" }],
  coverImage: { type: String, default: "" },
  published: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

const categorySchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now },
});

const Blog = mongoose.model("Blog", blogSchema);
const Category = mongoose.model("Category", categorySchema);

module.exports = { Blog, Category };

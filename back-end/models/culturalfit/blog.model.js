const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  content: [
    {
      type: { type: String, enum: ["text", "image"], required: true },
      content: { type: String, required: true },
    },
  ],
  createdAt: { type: Date, default: Date.now },
  contentBlockCount: { type: Number, default: 0 },
  textBlocks: { type: Number, default: 0 },
  imageBlocks: { type: Number, default: 0 },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = { Blog };

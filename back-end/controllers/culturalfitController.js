const { Blog, Category } = require("../models/culturalfit/blog.model");
const User = require("../models/user/user.model");
// const { Category } = require("../models/");

// Create a new blog
const createBlog = async (req, res) => {
  try {
    const { title, category, content, userId } = req.body;

    // Validate required fields
    if (!title || !content || !category) {
      return res
        .status(400)
        .json({ message: "Title, content, and category are required." });
    }

    // Calculate content block statistics
    const contentBlockCount = content.length;
    const textBlocks = content.filter((block) => block.type === "text").length;
    const imageBlocks = content.filter(
      (block) => block.type === "image"
    ).length;

    // Create a new blog instance
    const newBlog = new Blog({
      title,
      category,
      content,
      createdAt: new Date(),
      contentBlockCount,
      textBlocks,
      imageBlocks,
      author: userId,
    });

    // Save the blog to the database
    const savedBlog = await newBlog.save();

    res
      .status(201)
      .json({ message: "Blog created successfully.", blog: savedBlog });
  } catch (error) {
    console.error("Error creating blog:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

// Update a blog
const updateBlog = async (req, res) => {
  try {
    const { blogId } = req.params;
    const { title, content, categories, coverImage, published } = req.body;

    // Find the blog by ID
    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found." });
    }

    // Update the blog fields if provided
    if (title) blog.title = title;
    if (content) blog.content = content;
    if (categories) blog.categories = categories;
    if (coverImage) blog.coverImage = coverImage;
    if (published !== undefined) blog.published = published;

    // Save the updated blog
    const updatedBlog = await blog.save();

    res
      .status(200)
      .json({ message: "Blog updated successfully.", blog: updatedBlog });
  } catch (error) {
    console.error("Error updating blog:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

const getBlogs = async (req, res) => {
  try {
    const { category } = req.query;

    let query = {};
    if (category) {
      query.category = category;
    }

    const blogs = await Blog.find(query)
      .populate({
        path: "author",
        select: "-password",
      })
      .exec();

    if (blogs.length === 0) {
      return res.status(404).json({ message: "No blogs found." });
    }

    res.status(200).json({ message: "Blogs retrieved successfully.", blogs });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

// Delete a blog
const deleteBlog = async (req, res) => {
  try {
    const { blogId } = req.params;

    // Find the blog by ID
    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found." });
    }

    // Delete the blog
    await Blog.findByIdAndDelete(blogId);

    res.status(200).json({ message: "Blog deleted successfully." });
  } catch (error) {
    console.error("Error deleting blog:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

// like blog
const toggleLike = async (req, res) => {
  try {
    const { blogId } = req.params;
    const { userId } = req.body;

    // Find the blog by ID
    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found." });
    }

    // Clean up the `likes` array to remove any `null` or invalid entries
    blog.likes = blog.likes.filter((id) => id !== null);

    // Ensure the comparison is consistent by converting IDs to strings
    const alreadyLiked = blog.likes.some((id) => id.toString() === userId);

    if (alreadyLiked) {
      // Remove the user from the likes array
      blog.likes = blog.likes.filter((id) => id.toString() !== userId);
    } else {
      // Add the user to the likes array
      blog.likes.push(userId);
    }

    // Save the updated blog
    await blog.save();

    res.status(200).json({
      message: alreadyLiked
        ? "Like removed successfully."
        : "Blog liked successfully.",
      likes: blog.likes.length,
    });
  } catch (error) {
    console.error("Error toggling like:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

module.exports = {
  createBlog,
  updateBlog,
  deleteBlog,
  toggleLike,
  getBlogs,
};

const { Blog, Category } = require("../models/culturalfit/blog.model");
const User = require("../models/user/user.model");
// const { Category } = require("../models/");

// Create a new blog
const createBlog = async (req, res) => {
  try {
    const { title, content, userId, categoryIds, coverImage, published } =
      req.body;

    // Validate required fields
    if (!title || !content || !userId) {
      return res
        .status(400)
        .json({ message: "Title, content, and author are required." });
    }

    // Validate category IDs if provided
    if (categoryIds && categoryIds.length > 0) {
      const categoriesExist = await Category.find({
        _id: { $in: categoryIds },
      });
      if (categoriesExist.length !== categoryIds.length) {
        return res
          .status(404)
          .json({ message: "One or more categories not found." });
      }
    }

    // Create a new blog instance
    const newBlog = new Blog({
      title,
      content,
      author: userId,
      categories: categoryIds || [],
      coverImage: coverImage || "",
      published: published || false,
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

// Create a new category
const createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;

    // Validate required fields
    if (!name) {
      return res.status(400).json({ message: "Category name is required." });
    }

    // Check if the category already exists
    const existingCategory = await Category.findOne({ name });
    if (existingCategory) {
      return res
        .status(409)
        .json({ message: "Category with this name already exists." });
    }

    // Create a new category instance
    const newCategory = new Category({
      name,
      description: description || "",
    });

    // Save the category to the database
    const savedCategory = await newCategory.save();

    res.status(201).json({
      message: "Category created successfully.",
      category: savedCategory,
    });
  } catch (error) {
    console.error("Error creating category:", error);
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
  createCategory,
  updateBlog,
  deleteBlog,
  toggleLike,
};

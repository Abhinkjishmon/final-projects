const createBlog = async (req, res) => {
  try {
    const { title, content, author, categories, tags } = req.body;

    // Validate required fields
    if (!title || !content || !author) {
      return res
        .status(400)
        .json({ message: "Title, content, and author are required." });
    }

    const newBlog = new Blog({
      title,
      content,
      author,
      categories,
      tags,
    });

    await newBlog.save();
    res
      .status(201)
      .json({ message: "Blog created successfully.", blog: newBlog });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while creating the blog.", error });
  }
};

module.exports = { createBlog };

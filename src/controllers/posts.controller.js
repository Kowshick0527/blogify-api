// Function to handle fetching all posts
const getAllPosts = (req, res) => {
  res.status(200).json({
    message: "Blogify API is running!",
    data: [
      { id: 1, title: "Refactoring to Controllers", content: "Logic is now separated!" }
    ]
  });
};

// Export the function so the router can use it
module.exports = {
  getAllPosts
};
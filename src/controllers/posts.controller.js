// 1. Define the first function
const getAllPosts = (req, res) => {
  res.status(200).json({
    message: "Blogify API is running!",
    data: [] 
  });
};

// 2. Define the new second function
const getPostById = (req, res) => {
  const { postId } = req.params;
  res.status(200).json({
    message: `Fetching data for post with ID: ${postId}`
  });
};

// 3. Export them both
module.exports = {
  getAllPosts, // This matches the name above
  getPostById  // This matches the name above
};
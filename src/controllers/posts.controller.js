// 1. Define the getAllPosts function
const getAllPosts = (req, res) => {
  res.status(200).json({
    success: true,
    data: [
      { 
        id: 1, 
        title: "Refactoring for Professionals", 
        content: "Standardized responses are key." 
      }
    ]
  });
};

// 2. Define the getPostById function
const getPostById = (req, res) => {
  const { postId } = req.params;
  res.status(200).json({
    success: true,
    data: {
      id: postId,
      message: `Successfully retrieved post with ID: ${postId}`
    }
  });
};

// 3. Export both functions at the end
module.exports = {
  getAllPosts,
  getPostById
};
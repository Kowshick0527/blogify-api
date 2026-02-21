const getAllPosts = (req, res) => {
  res.status(200).json({
    success: true,
    data: [
      { id: 1, title: "Architectural Blueprint", content: "Mastering the MVC pattern." }
    ]
  });
};

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

module.exports = { getAllPosts, getPostById };
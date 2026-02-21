const express = require('express');
const router = express.Router();

// This handles: GET /api/v1/posts
router.get('/', (req, res) => {
  res.status(200).json({
    message: "Blogify API is running!",
    data: [] // You can put sample post data here
  });
});

module.exports = router;
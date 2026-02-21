const express = require('express');
const router = express.Router(); // <--- This is the line you are likely missing!
const postsController = require('../controllers/posts.controller');

// Now 'router' exists and can be used
router.get('/', postsController.getAllPosts);
router.get('/:postId', postsController.getPostById);

module.exports = router;
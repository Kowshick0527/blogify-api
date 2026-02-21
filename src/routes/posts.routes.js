const express = require('express');
const router = express.Router();
// Import the controller
const postsController = require('../controllers/posts.controller');

// Route for getting all posts
// Notice we just pass the reference: postsController.getAllPosts
router.get('/', postsController.getAllPosts);

module.exports = router;
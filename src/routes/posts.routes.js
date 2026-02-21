const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts.controller'); // Import the controller

// The router now looks much cleaner!
router.get('/', postsController.getAllPosts);

module.exports = router;
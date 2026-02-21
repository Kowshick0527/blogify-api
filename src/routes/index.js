const express = require('express');
const router = express.Router();
const postsRoutes = require('./posts.routes');

// Mounting the posts routes under the /posts path
router.use('/posts', postsRoutes);

module.exports = router;
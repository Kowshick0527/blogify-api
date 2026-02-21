const express = require('express');
const postRoutes = require('./routes/posts.routes.js');

const app = express();
const PORT = 3000;

// Mount the router at the specific prefix
app.use('/api/v1/posts', postRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
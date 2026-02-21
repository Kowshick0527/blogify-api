const express = require('express');
const app = express();
const apiRouter = require('./routes/index'); // Points to the Master Router

const PORT = 3000;

app.use(express.json());

// Apply the /api/v1 versioning to the entire app
app.use('/api/v1', apiRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
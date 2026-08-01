const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Mercies Cross backend is running');
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
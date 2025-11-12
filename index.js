const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 3000;

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Fallback route for `/`
// app.get('/', (req, res) => {
//   res.send('Welcome to the Open-COD server!');
// });

app.listen(port, () => {
  console.log(`Server listening http://localhost:${port}`);
});

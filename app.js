// Import Express
const express = require('express');
// Initialize the app
const app = express();
// Define the port
const PORT = 3000;

// Create a simple GET route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
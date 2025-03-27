// Import Express
const express = require('express');
// Initialize the app
const app = express();
// Define the port (use Heroku's PORT or fallback to 3000 locally)
const PORT = process.env.PORT || 3000;

// Create a simple GET route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/sheran', (req, res) => {
    res.send('Hello Sheran!'); // Changed for clarity, optional
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
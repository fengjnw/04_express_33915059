// Set up express
const express = require("express");
const app = express();
const port = 8000;

// Handle the routes: define responses for different endpoints
app.get("/", (req, res) => res.send("Hello World!"));   // Root route
app.get('/about', (req, res) => res.send('<h1>This is about page</h1>'))    // About route: simple HTML content
app.get('/contact', (req, res) => res.send('<h1>This is contact page</h1><p>Email: example@example.com</p>'))   // Contact route: simple HTML content with email
app.get('/date', (req, res) => res.send('<h1>This is date page</h1><p>Date: ' + new Date().toLocaleDateString('en-GB') + '</p>' + '<p>Time: ' + new Date().toLocaleTimeString() + '</p>'))   // Date route: use toLocaleDateString and toLocaleTimeString to shows current date and time

// Start listening for HTTP requests
app.listen(port,
    () => console.log(`Node server is running on port ${port}...`));   // Start the server, log message when server is running

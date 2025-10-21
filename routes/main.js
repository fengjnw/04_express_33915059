// Create a new router
const express = require("express");   // Import express module
const router = express.Router();    // Create a new router instance
const path = require("path");   // Import path module to handle file paths

// Handle the routes: define responses for different endpoints
router.get("/", (req, res) => res.send("Hello World!"));   // Root route
router.get('/about', (req, res) => res.send('<h1>This is about page</h1>'));    // About route: simple HTML content
router.get('/contact', (req, res) => res.send('<h1>This is contact page</h1><p>Email: example@example.com</p>'));   // Contact route: simple HTML content with email
router.get('/date', (req, res) => res.send('<h1>This is date page</h1><p>Date: ' + new Date().toLocaleDateString('en-GB') + '</p>' + '<p>Time: ' + new Date().toLocaleTimeString('en-GB') + '</p>'));   // Date route: use toLocaleDateString and toLocaleTimeString to shows current date and time
router.get('/welcome/:name', (req, res) => res.send('<h1>Welcome ' + req.params.name + '</h1>'));   // Welcome route: use parameter to greet user by name
router.get('/chain', (req, res, next) => {  // Chain route: demonstrate chained handlers with a delay
    res.write('<p>This is the first handler, the second will follow after 2 seconds...</p>');
    setTimeout(() => { next(); }, 2000);   // Add a 2-second delay before calling next handler
}, (req, res) => {
    res.write('<p>This is the second handler</p>');
    res.end();
});
router.get('/file', (req, res) => res.sendFile(path.join(__dirname, '../files/a.html')));   // File route: send a.html as response; use path.join() to resolve the parent directory

// Export the router for use in index.js
module.exports = router;

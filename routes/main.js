// Create an new router
const express = require("express");
const router = express.Router();
const path = require("path");

// Handle the routes: define responses for different endpoints
router.get("/", (req, res) => res.send("Hello World!"));   // Root route
router.get('/about', (req, res) => res.send('<h1>This is about page</h1>'));    // About route: simple HTML content
router.get('/contact', (req, res) => res.send('<h1>This is contact page</h1><p>Email: example@example.com</p>'));   // Contact route: simple HTML content with email
router.get('/date', (req, res) => res.send('<h1>This is date page</h1><p>Date: ' + new Date().toLocaleDateString('en-GB') + '</p>' + '<p>Time: ' + new Date().toLocaleTimeString('en-GB') + '</p>'));   // Date route: use toLocaleDateString and toLocaleTimeString to shows current date and time
router.get('/welcome/:name', (req, res) => res.send('<h1>Welcome ' + req.params.name + '!</h1>'));   // Welcome route: use parameter to greet user by name
router.get('/chain', (req, res, next) => {
    console.log('This is the first handler');
    next();
}, (req, res) => { res.send('This is the second handler, check the first handler log in the console.'); });   // Chain route: demonstrate two chained handlers
router.get('/file', (req, res) => res.sendFile(path.join(__dirname, '../files/a.html')));   // File route: send a sample HTML file as response

// Export the router for use in index.js
module.exports = router;

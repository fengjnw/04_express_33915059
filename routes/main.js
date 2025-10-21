// Create an new router
const express = require("express");
const router = express.Router();

// Handle the routes: define responses for different endpoints
router.get("/", (req, res) => res.send("Hello World!"));   // Root route
router.get('/about', (req, res) => res.send('<h1>This is about page</h1>'));    // About route: simple HTML content
router.get('/contact', (req, res) => res.send('<h1>This is contact page</h1><p>Email: example@example.com</p>'));   // Contact route: simple HTML content with email
router.get('/date', (req, res) => res.send('<h1>This is date page</h1><p>Date: ' + new Date().toLocaleDateString('en-GB') + '</p>' + '<p>Time: ' + new Date().toLocaleTimeString('en-GB') + '</p>'));   // Date route: use toLocaleDateString and toLocaleTimeString to shows current date and time

// Export the router for use in index.js
module.exports = router;

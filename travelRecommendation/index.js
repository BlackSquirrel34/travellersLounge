const express = require("express");
const path = require('path');

const app = express();

const PORT = 3005;


// this line is required. Shoutout to:
// https://stackoverflow.com/questions/65821696/css-and-js-file-not-linking-in-node-js
app.use('/public', express.static(path.join(__dirname,'./static')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'static', 'travel_recommendation.html')));
app.get('/about', (req, res) => res.sendFile(path.join(__dirname, 'static', 'about.html')));
app.get('/contact', (req, res) => res.sendFile(path.join(__dirname, 'static', 'contact.html')));



app.listen(PORT, () => {
	console.log("Server running on " + PORT);

});



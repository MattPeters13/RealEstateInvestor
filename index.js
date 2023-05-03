// Require necessary modules
const express = require('express');

// Create an instance of express application
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
// Define routes
app.get('/', (req, res) => {
	res.render('caprate');
});

app.get('/home', (req, res) => {
	res.render('home');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});

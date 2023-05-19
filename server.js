const express = require('express'); //library class
const path = require('path'); // library 

const app = express(); // creating the object. 
const PORT = 3001; // door for server 

app.use(express.static('public')); // allow express.js the ability to use static file ( images, CSS)
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html') ))
app.listen(PORT, () => 
    console.log(' cat eats fish ') // express will set up server and listen to any requests and responses
);

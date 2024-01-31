// init express app
const express = require('express');
const app = express();
const PORT = 8080;

// import the pets array from data.js
const pets = require('./data');


// GET - / - returns homepage
app.get('/', (req, res) => {

    //test that the server is operational 
    //server initially did not render because : was missing from url 
        //  res.send('Hello World'); 

    // serve up the public folder as static index.html file
    { res.sendFile(__dirname + '/public/index.html'); }
    res.status(200);
});



// hello world route
app.get('/api', (req, res) => {
    res.send('Hello World!');
});

// get all pets from the database
app.get('/api/v1/pets', (req, res) => {
    // send the pets array as a response

});

// get pet by owner with query string
app.get('/api/v1/pets/owner', (req, res) => {
    // get the owner from the request


    // find the pet in the pets array
    const pet = pets.find(pet => pet.owner === owner);

    // send the pet as a response

});

// get pet by name
app.get('/api/v1/pets/:name', (req, res) => {
    // get the name from the request


    // find the pet in the pets array
    const pet = pets.find(pet => pet.name === name);

    // send the pet as a response

});

app.listen(PORT, () => {
    console.log(`Server is listening on port  + ${PORT}`);
});

module.exports = app;
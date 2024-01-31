// init express app
// create app 
// set PORT
const express = require('express');
const app = express();
const PORT = 8080;

// import the pets array from data.js
const pets = require('./data');


// GET - / - returns index.html homepage 
app.get('/', (req, res) => {

        //Here I tested the server to ensure it was operational: 
            //  res.send('Hello World'); 

    // TODO serve up the public folder as static index.html file
    { res.sendFile(__dirname + '/public/index.html'); }
    res.status(200).send('HTML successfully rendered!')
});


// hello world route
app.get('/api', (req, res) => {
    res.send('Hello World!');
});


// TODO get all pets from the database
app.get('/api/v1/pets', (req, res) => {
    // send the pets array as a response
    // since pets are already declared within our express app , all that is required is that we GET the information. 
    res.status(200);
    res.send(pets); 
});

// TODO get pet by owner with query 
app.get('/api/v1/pets/owner', (req, res) => {
    // assign the owner from the request
    const owner = req.query.owner; 

    // Use the find method to return a boolean based off of the proceeding argument
    const pet = pets.find(pet =>  pet.owner === owner);    
    // if boolean is true then send the pet as a response 
    // if not true send a 404 stating that the pet was not found. 

    if(pet) { 
        res.status(200).send(pet.name + " (" + pet.breed + ") Was found based off it's owner name!" ); //set the status and return the pet name / breed
    } else { 
        res.status(404).send('Pet not found'); // Send a 404 status if no pet is found
    }
});

// TODO get pet by name using Route parameters 
app.get('/api/v1/pets/findbyname/:name', (req, res) => {
    // get the name from the request
    // use req.params.petName to assign a const 'name' to the user's inputted name value. 
    const petName = req.params.name; 

    // find the pet in the pets array using the find method + similar logic to what was used to query. 
    const petFound = pets.find(pet => pet.name === petName);

    // send the pet as a response
    if (petFound) { 
        res.status(200).send(petFound.name + " the " + petFound.breed + ", owned by " + petFound.owner + " has been found!"); 
    } else { 
        res.status(400).send('Pet not found, you sure you have the correct name?')
    }
});

app.listen(PORT, () => {
    console.log(`Server is listening on port  + ${PORT}`);
});



module.exports = app;
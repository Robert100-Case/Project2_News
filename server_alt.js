// Dependencies

const express = require('express');
const path = require('path');

// Sets up the Express App

const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Star Wars Characters (DATA)


// Displays all characters
//app.get('/api/characters', (req, res) => res.json(characters));

app.get('/api/articles', (req, res) => {res.json(savedArticles);console.log("data fetched");});

// Create New Characters - takes in JSON input
app.post('/articles', (req, res) => {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  const newArticle = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  //newCharacter.routeName = newCharacter.name.replace(/\s+/g, '').toLowerCase();
  console.log(newArticle);

  //characters.push(newCharacter);
  //res.json(newCharacter);
});

// Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));

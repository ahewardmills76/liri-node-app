/*
Upon inspection of my code, I know I had more than the initial require set up
and the if/else statements, but I remember going back and forth and deleting a lot.
My plan is to re-engage this assignment post-bootcamp and revisit the core concepts.

I understand the flow of how the logic of this app is supposed to work.  You are
requiring global variables within the 'liri.js' to make various npm packages and
your Spotify keys and Twitter keys available to you.  

Node provides your interface and you are running 'node liri' which represents your
process.argv at indexes [0] and [1]. Your process.argv for indexes [2] and [3] represent
the liricommand and search term. 

From here, I need to code the specific logic for each liri command so that the function
returns Spotify data, Tweets from twitter, and movie information.

*/


var fs = require("fs");
var request = require("request");
var dotenv = require("dotenv").config();
var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);
  var client = new Twitter(keys.twitter);


var liriCommand = process.argv[2];
var searchTerm = process.argv[3];




if (liriCommand === 'my-tweets'){
    
    console.log("Here are your latest tweets");

} else if (liriCommand === 'movie-this'){
    
        console.log("Here is what I found out about that movie...");

} else if (liriCommand === 'spotify-this-song'){
    
        console.log("Here is what I found out about that song...");

} else if (liriCommand === 'do-what-it-says'){
    
        console.log('Here is what you asked for...');
} else if (liriCommand === " "){

    console.log("I eagerly await your command")
}





# liri-node-app


## GitHub link 
https://chefjoannacodes.github.io/liri-node-app/

## This is an app that uses the command line node packages to respond to user input. The three packages used at Spotify, OMDB, and Twitter. The user can search for a song, movie, and view tweets (from one user). The response displays via 4 set commands in the terminal/bash window. 

## Requirements
####  Overview

* In this assignment, you will make LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.
Before You Begin

* LIRI will display your latest tweets. If you don't already have an account on Twitter, make one and post a few tweets about your latest projects.
Make a new GitHub repository called liri-node-app and clone it to your computer.
To retrieve the data that will power this app, you'll need to send requests to the Twitter, Spotify and IMDB APIs. You'll find these Node packages crucial for your assignment.

-Twitter
-Spotify
-Request
-You'll use Request to grab data from the OMDB API.
Instructions

1. Make a .gitignore file and add the following lines to it.
*node_modules
*.DS_Store
 - Make a JavaScript file named keys.js. Do Not add this file to the .gitignore. This would be a good thing to do in the real world, but it makes grading this assignment a challenge. Inside keys.js your file will look like this:
console.log('this is loaded');

exports.twitterKeys = {
  consumer_key: '<input here>',
  consumer_secret: '<input here>',
  access_token_key: '<input here>',
  access_token_secret: '<input here>',
}
2. Get your Twitter API keys by following these steps:
- Step One: Visit https://apps.twitter.com/app/new
- Step Two: Fill out the form with dummy data. Type http://google.com in the Website input. Don't fill out the Callback URL input. Then submit the form.
- Step Three: On the next screen, click the Keys and Access Tokens tab to get your consume key and secret.Copy and paste them where the <input here> tags are inside your keys.js file.
- Step Four: At the bottom of the page, click the Create my access token button to get your access token key and secret.
Copy the access token key and secret displayed at the bottom of the next screen. Paste them where the <input here> tags are inside your keys.js file.
3. Make a file called random.txt.
Inside of random.txt put the following in with no extra characters or white space:
spotify-this-song,"I Want it That Way"
4. Make a JavaScript file named liri.js.
5. At the top of the liri.js file, write the code you need to grab the data from keys.js. Then store the keys in a variable.
Make it so liri.js can take in one of the following commands:
my-tweets
spotify-this-song
movie-this
do-what-it-says
6. What Each Command Should Do

*node liri.js my-tweets
This will show your last 20 tweets and when they were created at in your terminal/bash window.
* node liri.js spotify-this-song '<song name here>'
This will show the following information about the song in your terminal/bash window
- Artist(s)
- The song's name
- A preview link of the song from Spotify
- The album that the song is from
- if no song is provided then your program will default to
"The Sign" by Ace of Base

* node liri.js movie-this '<movie name here>'
This will output the following information to your terminal/bash window:
   * Title of the movie.
   * Year the movie came out.
   * IMDB Rating of the movie.
   * Country where the movie was produced.
   * Language of the movie.
   * Plot of the movie.
   * Actors in the movie.
   * Rotten Tomatoes Rating.
   * Rotten Tomatoes URL.
If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/
It's on Netflix!

* node liri.js do-what-it-says
* Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
Feel free to change the text in that document to test out the feature for other commands.


## Technologies Used
#### 
- Javascript
- Node
- Command Line

## Code Explaination
- First, I found the node packages online and installed them into my file. After reading the documentation on the package, I began using them and used console.log to return the "response" or "data" as an object. I used "parse" to display the particular data I wanted. 

The code below shows the basic structure I used to retrieve data from the APIs with node, and then display it in a user-friendly format in the terminal/bash window.  
```
var input = process.argv;

var appName = input[2];
var searchTerm = input[3];

var request = require("request");

var nodeArgs = process.argv;
//Create an empty variable for holding the movie name
var movieName = "";

if (appName == "movie-this") {
    //Loop through all the words in the node argument
    //Do for loop to handle includion of "+"s
    for (var i = 3; i < nodeArgs.length; i++) {
        if (i > 3 && i < nodeArgs.length) {
            movieName = movieName + " " + nodeArgs[i];

        } else {
            movieName += nodeArgs[i];
        }
    }


    // Then run a request to the OMDB API with the movie specified
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&r=json";


    request(queryUrl, function(error, response, body) {
        // console.log(body);

        // If the request is successful
        if (!error && response.statusCode === 200) {

            // Parse the body of the site and recover just the imdbRating
            // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
            console.log("TITLE: " + JSON.parse(body).Title);
```
 I am still trying to understand the importance of the .gitignore and the keys.js. This is my first project with Node, and I have a lot to learn, yet I feel accomplished in covering functionality with the 3 node packages mentioned. 





var input = process.argv;

var appName = input[2];
var searchTerm = input[3];


//=================Setup Twitter
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: "IWts7bwBhFNM9qnYtE7ZkhHD1",
  consumer_secret: "Q61urvGOj4Ifqq8ECBsqAcZJnvCxTVXUFB7hISVQkX1KLlmFug",
  access_token_key: "233082682-8dssfVg1tEe9HYYOOdIiicHTqubsGZKUSGZJ62lr",
  access_token_secret: "jFEnv5hg7YjAcjP9HrAWQOCg6aNQRjXjxsiZn40HXPicQ"
});

if (appName == "my-tweets") {
var params = {screen_name: 'chefjoannas', count: 20};

client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
  	for (i = 0; i<20; i++) {

    console.log("\nTweet " + [i] + "\n" + tweets[i].text + "\nCreated at: " + tweets[i].created_at + "\n");
    
    console.log("-------------------------------------------------");
}
  }
});
}

// ==================end Twitter
//====================Setup Spotify


 var spotify = require('spotify');

if (appName == "spotify-this-song") {
spotify.search({ type: 'track', query: searchTerm, count: 10}, function(err, data) {
    for (var i=0; i<10; i++) {
    console.log("spotify input", searchTerm);
    console.log("_________________");
    console.log("Artist: ", data.tracks.items[i].album.artists[i].name);
    console.log("_________________");
    console.log("Album: ", data.tracks.items[i].album.name);
    console.log("_________________");
    console.log("Preview link: ", data.tracks.items[i].preview_url);
    console.log("_________________");
    console.log("Song Name: ", data.tracks.items[i].name);
    console.log("_________________");
    if ( err ) {
        console.log('Error occurred: ' + err);
        searchTerm = "the+sign+ace+of+base";
        return;
    }
};

});
}

//SPOTIFY END++++++++++++++++++++++++++++++++


//OMDB start========================


// var omdb = require('omdb');
var request = require("request");

var nodeArgs = process.argv;
//Create an empty variable for holding the movie name
var movieName = "";

if (appName == "movie-this") {
//Loop through all the words in the node argument
//Do for loop to handle includion of "+"s
for (var i=3; i < nodeArgs.length; i++) {
	if (i>3 && i < nodeArgs.length) {
		movieName = movieName + " " + nodeArgs[i];

	}
	else {
		movieName += nodeArgs[i];
	}
}


// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&r=json";

// This line is just to help us debug against the actual URL.
// console.log(queryUrl);

request(queryUrl, function(error, response, body) {
	// console.log(body);

  // If the request is successful
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("TITLE: " + JSON.parse(body).Title);
    console.log("RELEASE Year: " + JSON.parse(body).Year);
    console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
    console.log("COUNTRY: " + JSON.parse(body).Country);
    console.log("LANGUAGE: " + JSON.parse(body).Language);
    console.log("PLOT: " + JSON.parse(body).Plot);
    console.log("ACTORS: " + JSON.parse(body).Actors);
  }
});

    // omdb.search(searchTerm, function(err, movies) {
    //     if (err) {
    //         return console.error(err);
    //     }

    //     if (movies.length < 1) {
    //         return console.log('No movies were found!');
    //     }

    //     movies.forEach(function(movie) {
    //         console.log('%s (%d)', movie.title, movie.year);
    //     });


    // });

    // omdb.get({ title: searchTerm, year: 2004 }, true, function(err, movie) {
    //     if (err) {
    //         console.log(movie);
    //         return console.error(err);
    //     }

    //     if (!movie) {
    //         return console.log('Movie not found!');
    //     }

    //     console.log('%s (%d) %d/10', movie.title, movie.year, movie.imdb.rating);
    //     console.log(movie.plot);

    // });

// Then run a request to the OMDB API with the movie specified
// request(searchTerm, function(error, response, body) {
	
//   // If the request is successful (i.e. if the response status code is 200)
//   if (!error && response.statusCode === 200) {

//     // Parse the body of the site and recover just the imdbRating
//     // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
//     console.log(JSON.parse(body));
//     console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
//   }

// });


}




//OMDB end ========================

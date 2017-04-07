var input = process.argv;

var appName = input[2];
var searchTerm = input[3];

var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: "IWts7bwBhFNM9qnYtE7ZkhHD1",
  consumer_secret: "Q61urvGOj4Ifqq8ECBsqAcZJnvCxTVXUFB7hISVQkX1KLlmFug",
  access_token_key: "233082682-8dssfVg1tEe9HYYOOdIiicHTqubsGZKUSGZJ62lr",
  access_token_secret: "jFEnv5hg7YjAcjP9HrAWQOCg6aNQRjXjxsiZn40HXPicQ"
});

if (appName == "my-tweets") {
var params = {screen_name: 'chefjoannas'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
    console.log("--------------");
  }
});
}

// ==================end Twitter



 var spotify = require('spotify');

if (appName == "spotify-this-song") {
spotify.search({ type: 'track', query: searchTerm}, function(err, data) {
    for (var i=0; i<10; i++) {
    console.log("spotify input", searchTerm);
    console.log("_________________");
    console.log("Artist: ", data.tracks.items[i].album.artists[i].name);
    console.log("_________________");
    console.log("Album: ", data.tracks.items[i].album.name);
    console.log("_________________");
    console.log("Preview link: ", data.tracks.items[i].preview_url);
    console.log("_________________");
    console.log("Track: ", data.tracks.items[i].name);
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


//OMDB ========================


var omdb = require('omdb');


if (appName == "movie-this") {
    omdb.search(searchTerm, function(err, movies) {
        if (err) {
            return console.error(err);
        }

        if (movies.length < 1) {
            return console.log('No movies were found!');
        }

        movies.forEach(function(movie) {
            console.log('%s (%d)', movie.title, movie.year);
        });


    });

    omdb.get({ title: searchTerm, year: 2004 }, true, function(err, movie) {
        if (err) {
            console.log(movie);
            return console.error(err);
        }

        if (!movie) {
            return console.log('Movie not found!');
        }

        console.log('%s (%d) %d/10', movie.title, movie.year, movie.imdb.rating);
        console.log(movie.plot);

    });
}

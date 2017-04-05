// var Twitter = require('twitter');
 
// var client = new Twitter({
//   consumer_key: "IWts7bwBhFNM9qnYtE7ZkhHD1",
//   consumer_secret: "Q61urvGOj4Ifqq8ECBsqAcZJnvCxTVXUFB7hISVQkX1KLlmFug",
//   access_token_key: "233082682-8dssfVg1tEe9HYYOOdIiicHTqubsGZKUSGZJ62lr",
//   access_token_secret: "jFEnv5hg7YjAcjP9HrAWQOCg6aNQRjXjxsiZn40HXPicQ"
// });

 
// var params = {screen_name: 'chefjoannas'};
// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//   if (!error) {
//     console.log(tweets);
//     console.log("--------------");
//   }
// });

//==================================^^^^^^^^^^^^^^^^

// stream = null;

// //Use the default port (for beanstalk) or default to 8081 locally
// server.listen(process.env.PORT || 8081);

// //Setup rotuing for app
// app.use(express.static(__dirname + '/public'));

// //Create web sockets connection.
// io.sockets.on('connection', function (socket) {

//   //Code to run when socket.io is setup.

// });

// client.get('favorites/list', function(error, tweets, response) {
//   if(error) throw error;
//   console.log(tweets);  // The favorites. 
//   console.log(response);  // Raw response object. 
// });

// client.post('statuses/update', {status: 'Dinner was rice, beans, and grilled steak. I set the fire alarm off'},  function(error, tweet, response) {
//   if(error) throw error;
//   console.log(tweet);  // Tweet body. 
//   console.log(response);  // Raw response object. 
// });

// var stream = client.stream('statuses/filter', {track: 'julia child'});
// stream.on('data', function(event) {
//   console.log(event && event.text);
// });
 
// stream.on('error', function(error) {
//   throw error;
// });

// ==================end Twitter

// var spotify = require('spotify');

// var spotifyInput = process.argv[2];
 
// spotify.search({ type: 'track', query: spotifyInput}, function(err, data) {
//     for (var i=0; i<10; i++) {
//     console.log("spotify input", spotifyInput);
//     console.log("_________________");
//     console.log("Artist: ", data.tracks.items[i].album.artists[i].name);
//     console.log("_________________");
//     console.log("Album: ", data.tracks.items[i].album.name);
//     console.log("_________________");
//     console.log("Preview link: ", data.tracks.items[i].preview_url);
//     console.log("_________________");
//     console.log("Track: ", data.tracks.items[i].name);
//     console.log("_________________");
//     if ( err ) {
//         console.log('Error occurred: ' + err);
//         spotifyInput = "the+sign+ace+of+base";
//         return;
//     }
// };
 
// });

//SPOTIFY END++++++++++++++++++++++++++++++++


//OMDB ========================
var request = require('request');
request('http://www.omdbapi.com/?t=', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred 
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
  console.log('body:', body); // Print the HTML for the Google homepage. 
});

request.find('Forrest', 'movie').then(function (movie) {
    (movie).should.be.a.Array;
    movie[0].Title.should.be.exactly('Forrest Gump');
});
 
request.get('Breaking Bad', 'series').then(function (serie) {
    serie.Title.should.be.exactly('Breaking Bad');
    serie.should.have.properties({
        Response: 'True'
    });
});











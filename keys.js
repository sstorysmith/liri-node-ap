Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: "3fd0903482ce435a9d475d88ce2146a6",
  secret: "de639700da3348e59ccc511c3f791cad"
});

console.log('this is loaded');


// exports is essentially an object that we can add data or variables to
// We can access them from other files using the 'require' keyword.

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};
 

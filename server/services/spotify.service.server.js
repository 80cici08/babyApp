var SpotifyWebApi = require('spotify-web-api-node');

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: '77dfb73de9a24ab78edf78620fec9c0f',
  clientSecret: '09b589089571483cb0448444bc310224',
  redirect_uri: 'http://localhost:8888/callback',
});

/*// Retrieve an access token.
spotifyApi.clientCredentialsGrant().then(
  function(data) {
    console.log('The access token expires in ' + data.body['expires_in']);
    console.log('The access token is ' + data.body['access_token']);
    // Save the access token so that it's used in future calls
    spotifyApi.setAccessToken(data.body['access_token']);
  },
  function(err) {
    console.log('Something went wrong when retrieving an access token', err);
  }
);*/


module.exports = function (app) {

  app.get("/api/artists", getAllArtists);

  function getAllArtists(req, res) {
    console.log("hitting getAllArtists!");
    var key = req.query["key"];

    spotifyApi.getMe().then(
      function (data) {
        spotifySearch(key);
      },
      function (err) {
        getSpotifyAccess().then(
          function(data) {
            console.log('The access token expires in ' + data.body['expires_in']);
            console.log('The access token is ' + data.body['access_token']);
            // Save the access token so that it's used in future calls
            spotifyApi.setAccessToken(data.body['access_token']);

            spotifySearch(key);
          },
          function(err) {
            console.log('Something went wrong when retrieving an access token', err);
          }
        );
      }
    );
  }

  function spotifySearch(key) {
    //var key = req.query["key"];
    spotifyApi.searchArtists(key, { limit: 100, offset: 20 })
      .then(function(data) {
        res.status(200).send(data.body);
      }, function(err) {
        res.status(400).send(err);
      });
  }

  function getSpotifyAccess() {
    return spotifyApi.clientCredentialsGrant();
  }
}

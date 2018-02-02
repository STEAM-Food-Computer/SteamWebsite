const express = require('express');
const app = express();

app.get('/', function(req, res) {

res.redirect('/home');

});

app.get('/contact', function(req, res) {
	res.redirect('/contact_website.html');
});

app.get('/prototype', function(req, res) {
	res.redirect('/prototype_website.html');
});


app.get('/the-team', function(req, res) {
	res.redirect('/team_website.html');
});

app.use(function(req, res, next) {
  console.log('Someone just visited the webpage.');
  next();
});





app.use('/',  express.static(__dirname + '/SteamWebsite2.0', {extensions: ['html']}));

//app.use('/images', express.static(__dirname +'/images'));

app.listen(3000);

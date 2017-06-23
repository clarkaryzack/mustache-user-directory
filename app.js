const express = require('express');
const mustacheExpress = require('mustache-express');

const data = require("./data");

const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');
app.use(express.static('public'));

//Listening on root
app.get('/', function (req, res) {
  res.render('index', {users: data.users });
});

app.get('/:username', function (req, res) {
	const user = data.users.find(function (user)
	{return user.username == req.params.username });
  res.render('single', { users: user } );
});

// app.get(‘/:username/‘, function (req, res) {
//   const user = data.users.find(function (user) { return user.username == req.params.username });
//   res.render(‘profile’, { user: user });
// });

app.listen(3000, function () {
  console.log('Successfully started express application!');
});

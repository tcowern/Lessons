var express = require('express'),
    // morgan is a logger for back-end debugging and analytics
    // you might not actually use this in production
    morgan = require('morgan'),
    // body-parser is a module that parses the request body into json objects
    // URL encoded string 'route?key=my%20value&otherKey=joe%33s%20bar'
    // becomes { key:"my value", otherKey:"joe's bar" }
    bodyParser = require('body-parser');

// var TheBearHouse = [];/

var app = express();

// function middleware() {
//   fs.readFile('/', err, data) => {
//   if(err){
//     res.redirect("didnot")
//     console.log("Magellan")
//       }
//     });
//   };

// mount body-parser middleware vertically up top so that all requests
// are parsed before we actually act on them


// parse application/x-www-form-urlencoded
// extended:false (value of the key/value must be string or array)
// extended:true  (value of the key/value pair may be anything - like an object)
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// this is an example of custom middleware that works the same way that our third party
// middleware works, by returning a function and then executing that function in the app.use()
// var bearMorgan = () => {
//     return (req, res, next) => {
//         console.log('Roar to ' + req.path);
//         next();
//     };
// };
// app.use(bearMorgan());

// add a public static route handler from express to deliver ALL files from the public directory
app.use(express.static('public'))

// set up a basic root route
app.get('/', function(req, res) {
    res.sendFile("seville.html", { root: './public/html' });
});

app.get('/CanaryIslands', function (req, res) {
  res.send('CanaryIslands');
});

app.get('/CapeVerde', function (req, res) {
  res.send('CapeVerde');
});

app.get('/StraitOfMagellan', function (req, res) {
  res.send('StraitOfMagellan');
});

app.get('/Guam', function (req, res) {
  res.send('Guam');
});

app.get('/Phillipines', function (req, res) {
  res.send('Phillipines');
});

app.get('/*', function (req, res) {
  res.send('didnot');
});


// app.get('/api/bears', (req, res) => {
//     res.send(TheBearHouse);
// });
// app.post('/api/bears', (req, res) => {
//     console.log("Body : ", req.body);
//     // Add a bear to TheBearHouse
//     TheBearHouse.push({
//         name: req.body.name,
//         accessories: req.body.accessories.split(', '),
//         stuffedness: +req.body.stuffedness
//     });

    // Send a response down
//     res.send('Okie Dokie');

// });

// app.delete('/api/bears/:bearIndex', (req, res) => {
//     // {
//     //     bearIndex : '?'
//     // }
//     TheBearHouse.splice(+req.params.bearIndex, 1);
//     res.send(200)
// });

app.post('/Guam', (req, res) => {
  res.redirect('/html/Guam.html');
  console.log("The submit button was clicked");
});
app.post('/CanaryIslands', (req, res) => {
  res.redirect('/html/CanaryIslands.html');
  console.log("The submit button was clicked");
});
app.post('/CapeVerde', (req, res) => {
  res.redirect('/html/CapeVerde.html');
  console.log("The submit button was clicked");
});
app.post('/StraitOfMagellan', (req, res) => {
  res.redirect('/html/StraitOfMagellan.html');
  console.log("The submit button was clicked");
});
app.post('/Phillipines', (req, res) => {
  res.redirect('/html/Phillipines.html');
  console.log("The submit button was clicked");
});


// set up express listener to listen to port 3000
app.listen(3000, (err) => {
    if (err) {
        console.log("Error:", err);
        process.exit(1);
    }
    console.log("Server is listening to port 3000");
});
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var importAllQuestions = require("./questions.json")
const logicHandler = require("./logic.js")

var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs.engine({
    defaultLayout: "main"
  }));
  app.set('view engine', 'handlebars');

  
app.use(express.static('public'));

app.use(function (req, res, next) {
	console.log("== Request made");
	console.log("  - Method:", req.method);
	console.log("  - URL:", req.url);
	next();
});




app.get('/about', function(req, res) {
  res.status(200).render('about');
})

// Homepage
app.get('/', function(req, res) {
  let generatedQuestions = logicHandler.generateQuestions(importAllQuestions);  
  res.status(200).render('quizPage', {
    
    questionInfo: generatedQuestions
  });
})

app.get('*', function (req, res) {
  res.status(404).render('404');
});


app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
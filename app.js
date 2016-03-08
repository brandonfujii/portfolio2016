var express = require('express');
var app = express();
var path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));


var homeController = require('./controllers/index')

app.get('/', homeController.index);



//start Server
app.listen(process.env.PORT || 1200, function(){
  console.log('Express server listening on port %d in %s mode', this.address().port, app.settings.env);
});



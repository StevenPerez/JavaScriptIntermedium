var express     = require('express'),
    app         = express(),
    bodyParser  = require('body-parser'),
    cooldb      = require('cooldb-promise'),
    dbAgenda    = cooldb();

app.use( bodyParser.urlencoded({ extended: false }) );
app.use( express.static(__dirname + '/public') );

dbAgenda.add({ item: { name: 'Steven', age: 29, cel: '01' } });
dbAgenda.add({ item: { name: 'Liz', age: 18, cel: '02' } });
dbAgenda.add({ item: { name: 'Mary', age: 22, cel: '03' } });

var Router = express.Router();

/*----------  INDEX  ----------*/
Router.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

// Agenda

/*----------  READ  ----------*/

Router.get('/agenda', function(req, res){
  res.send( dbAgenda.db() );
});

/*----------  CREATE  ----------*/
Router.post('/agenda/new', function(req, res){
  try {
    dbAgenda.add({ item: req.body });
    res.send('Done');
  } catch (err) {
    res.send(JSON.stringify(err));
  }
});

/*----------  DELETE  ----------*/
Router.post('/agenda/delete', function(req, res){
  try {
    dbAgenda.del({ key:'cuid', value: req.body.cuid });
    res.send('Done');
  } catch (err) {
    res.send(JSON.stringify(err));
  }
});

/*----------  UPDATE  ----------*/
Router.post('/agenda/update', function(req, res){
  try {
    dbAgenda.update({ key:'cuid', value: req.body.cuid,
                      item: JSON.parse(req.body.item) });
    res.send('Done');
  } catch (err) {
    res.send(JSON.stringify(err));
  }
});

app.use('/', Router);

app.listen(3000);
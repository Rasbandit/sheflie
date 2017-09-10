const app = require('express')(),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  massive = require('massive'),
  port = 8080;

require('dotenv').config();

const ctrl = require('./controller/controller');

app.use(bodyParser.json());
app.use(cors());

massive(process.env.CON_STRING).then((db) => {
  app.set('db', db);
});

app.get('/api/shelf/:id', ctrl.getShelf);
app.get('/api/bin/:id', ctrl.getBin);
app.post('/api/bin/:id', ctrl.createBin);

app.listen(port, () => {
  console.log(`Ship docked at port: ${port}`);
});

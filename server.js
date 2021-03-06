const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

//let reviewRouter = require('./app/routes/review.routes.js');
//app.use('/', reviewRouter);
 
// Create a Server
let server = app.listen(8080, function () {
 
  let host = server.address().address
  let port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port)
})
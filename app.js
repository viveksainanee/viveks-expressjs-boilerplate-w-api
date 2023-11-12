const express = require('express');
const cors = require('cors');

const parkRoutes = require('./routes/parks');
const app = express();

// For parsing application/json
app.use(express.json());
 
// Middlware to enable CORS via headers
app.use(cors());

app.use('/parks', parkRoutes);

app.get('/', function (req, res) {
    res.send({
        hello: "world"
    })
 })

/** catch 404 and fwd to error handler */

app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/** error handler */

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: err
  });
});

module.exports = app;

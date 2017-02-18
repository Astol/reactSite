var express = require('express')
var app = express()

app.use(express.static("../html"));

require('./routes.js')(app);
app.listen(3000, function() {
  console.log('App listening on port 3000...')
})

module.exports = function(app)
{
  app.use(bodyParser.urlencoded({ extended: false}));
  app.use(bodyParser.json());
  app.use(require("express").static("../html"));

  app.get('/', function (req, res) {
    res.send('Hello World')
  })


}

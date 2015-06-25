var express = require('express'),
  request = require('request');

var app = express();
app.get('/github/search', function(req, res) {
  request.get({
    url: 'https://api.github.com/search/repositories',
    qs: {
      q: 'language:' + req.query.language,
      sort:'stars',
      per_page: 10
    },
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.130 Safari/537.36'
    }
  },
    function(err, response, body) {
      if (err || response.statusCode != 200) {
        console.log('error', err, response, body);
        return res.status(500).send(err);
      }
      
      res.json(JSON.parse(body));
    });

});

app.use(express.static('.'));

app.listen(process.env.PORT || 9000);
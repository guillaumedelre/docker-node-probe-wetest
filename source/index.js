const express = require('express');
const bodyParser = require('body-parser');
const Collection = require('postman-collection').Collection;
const newman = require('newman');

var app = express();
// to support JSON-encoded bodies
app.use(bodyParser.json());
// to support URL-encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/config', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    if (req.body.postman !== null) {
        var newmanCollection = new Collection(req.body.postman);
        // log items at root level of the collection
        newman.run({
            collection: newmanCollection,
            reporters: 'cli'
        }).on('done', function (err, summary) {
            if (err || summary.error) {
                res.json(summary);
            } else {
                res.json(summary);
            }
        });
    } else {
        res.json(req.body);
    }
});

app.listen(8080);

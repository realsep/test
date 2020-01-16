var express = require('express');
var bodyParser = require('body-parser');
var port = 5004;
var rp = require('request-promise');


var app = new express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.get('/', function(req, res) {
    res.sendFile('/search.html', { root: __dirname });
    //     res.send("complete!");

});

app.post('/test', function(req, res) {
    res.send("complete")
//     var options = {
//         method: 'POST',
//         uri: ' https://80beac66.ngrok.io/test',
//         json: true
//     };

//     rp(options)
//         .then(function(parsedBody) {
//             res.send(parsedBody)
//         })
//         .catch(function(err) {
//             return next(err);
        });
});

app.listen(process.env.PORT || port, function() {
    console.log('Node start on port : ' + port);
});

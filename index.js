const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.set('port', process.env.PORT || 3000);

app.get('/', (req,res) => {
    console.log("누군가 들어왔다!");
    res.redirect("/hi");
});

app.get('/hi', (req,res) => {
    fs.readFile('hi.html', (err, data) => {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(data);
    });
});

app.listen(app.get('port'));
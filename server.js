const express = require('express');
const server = express();

server.use(express.static(__dirname + '/build'));

server.get('/', (req, res) => {
    const fileDirectory = path.resolve(__dirname, '.', 'client/build/');
  
    res.sendFile('index.html', {root: fileDirectory}, (err) => {
      res.end();
  
      if (err) throw(err);
    });
  })

server.listen(3000);
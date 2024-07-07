const express = require('express');
const app = express();
const https = require('https');
const fs = require('fs');
const path = require('path');
const port = 443;

const privateKey = fs.readFileSync('certs/key.pem');
const certificate = fs.readFileSync('certs/cert.pem');

app.set('view engine', 'ejs');

app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/src', express.static(__dirname + '/src'));

app.get('/', (req, res) => {
  res.render('setup');
});

app.get('/main', (req, res) => {
  res.render('main');
});

app.get('/whitelist.txt', (req, res) => {
  if (req.query.country === 'us') {
    const filePath = path.join(__dirname, 'src', 'whitelist.txt');
    res.download(filePath, (err) => {
      if (err) {
        console.error('Error sending file:', err);
        res.status(500).send('Internal Server Error');
      }
    });
  } else {
    res.status(404).send('Not found');
  }
});

https
  .createServer(
    {
      key: privateKey,
      cert: certificate,
    },
    app
  )
  .listen(port, () => {
    console.log(`Server running on https://localhost:${port}`);
  });

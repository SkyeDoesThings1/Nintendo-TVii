const express = require('express');
const app = express();
const https = require('https');
const fs = require('fs');
const port = 443;
const path = require('path');

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

app.get('/olv/test', (req, res) => {
  res.render('olvtest');
});

app.get('/whitelist.txt', (req, res) => {
  const country = req.query.country;

  let filePath;
  switch (country) {
    case 'us':
      filePath = path.join(__dirname, 'Whitelists/US/whitelist.txt');
      break;
    case 'eu':
      filePath = path.join(__dirname, 'Whitelists/EU/whitelist.txt');
      break;
    case 'jp':
      filePath = path.join(__dirname, 'Whitelists/JP/whitelist.txt');
      break;
    default:
      res.status(400).send('Invalid country parameter.');
      return;
  }

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading the file.');
      return;
    }
    res.type('txt').send(data);
  });
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

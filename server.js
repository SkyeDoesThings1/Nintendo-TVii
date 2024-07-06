const express = require('express');
const path = require('path');
const os = require('os');
/*
const https = require('https');
*/
const fs = require('fs');
const app = express();
const port = 443;

// Paths to your SSL certificate and key
const privateKeyPath = 'certs/key.pem';
const certificatePath = 'certs/cert.pem';

/*
// Load the SSL certificate and key
const privateKey = fs.readFileSync(privateKeyPath, 'utf8');
const certificate = fs.readFileSync(certificatePath, 'utf8');
const credentials = { key: privateKey, cert: certificate };
*/

// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));

// Define a route for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'newUser.html'));
});

// Define a route for the new user page
app.get('/main', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Sends Whitelist.txt to the Wii U
app.get('/whitelist.txt?country=us', (req, res) => {
  res.sendFile('whitelist.txt');
});

// Function to get the local IP address
function getLocalIPAddress() {
  const interfaces = os.networkInterfaces();
  for (const iface of Object.values(interfaces)) {
    for (const alias of iface) {
      if (alias.family === 'IPv4' && !alias.internal) {
        return alias.address;
      }
    }
  }
  return 'localhost';
}

// Start the server
const computersIP = getLocalIPAddress();
createServer(credentials, app).listen(port, () => {
  console.log(`Server running at http(s)://${computersIP}:${port}`);
});

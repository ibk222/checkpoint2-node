// 1)  Write a program to print "HELLO WORLD" to the console

let myFavoriteWord = "HELLO WORLD";

console.log(myFavoriteWord)


//2) create a server  
const http = require("http");

const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Hello Node!!!!</h1>\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


// 3) First, require the file system to create a file named "welcome.txt" containing one line "Hello Node".
const fs = require('fs');

fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) {
    console.error('Error writing to file', err);
  } else {
    console.log('File created successfully: welcome.txt');
  }
});

//creating  a program that reads and console.log data from hello.txt
const fs = require("fs");

fs.readFile("hello.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file", err);
  } else {
    console.log(data);
  }
});

// 4) creating a new file named "password-generator"  

// First, install the package by running: npm install generate-password
const generatePassword = require('generate-password');

// Generate a password
const password = generatePassword.generate({
  length: 10,
  numbers: true,
  symbols: true,
  uppercase: true,
  excludeSimilarCharacters: true,
});

console.log(`Generated Password: ${password}`);

//4) Create a function that generates random passwords and console.log() that password.

const generatePassword = require('generate-password');

function generateRandomPassword() {
  const password = generatePassword.generate({
    length: 12,
    numbers: true,
    symbols: true,
    uppercase: true,
    excludeSimilarCharacters: true,
  });
  console.log(`Generated Password: ${password}`);
}



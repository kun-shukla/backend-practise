//THis is the global object in nodejs, same variable in client side (browser javascript) will show all the points we know (document/addEventListenet emptyCells: )
// console.log(globalThis);

//Create a simple server
  //http
  //Express.js package from NPM (Node Package Manager) 

// Example of built in module (nodejs), not third party package from NPM.
// import http from 'http';

// //create a server object:
// http.createServer(function (req, res) {
//   res.write('Hello World!'); //write a response to the client
//   res.end(); //end the response
// }).listen(8080); //the server object listens on port 8080

import express from 'express';
import booksRouter from './routes/books.js';

const app = express();
const port = 3000;

app.use(express.json()); //Creates body and attaches it to the request object req.body: {} 

app.use('/books', booksRouter)
// app.use('/videos', videosRouter)

app.listen(port, () => console.log('Listen'))
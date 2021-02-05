("use strict");
const quotes = require("./quotes");

const http = require("http"); //require and import are essentially the same thing
const port = 3000;


http
  .createServer((req, res) => {
    //cod for getting random quote
    const index = Math.floor(Math.random() * quotes.length); // random number as the array index
    
    const randomQuote = quotes[index];
    console.log(randomQuote);
    res.writeHead(200, { "Content-type": "text/plain" });
    res.write(randomQuote);
    res.end();
  })
  .listen(port);

  console.log("http://localhost:" + port);

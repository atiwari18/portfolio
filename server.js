const express = require("express");
const path = require("path");

const app = express();


/*
This tells Express to serve static files (e.g., JavaScript, CSS) from the Client/build directory. 
This is where the built React app files are located.
*/
app.use(express.static(path.join(__dirname, "Client", "build")));


/*
This sets up a fallback route to serve the index.html file for any requests that don't match a static file. 
This is necessary for React Router to work correctly in single-page applications (SPA) where routing is 
handled on the client side.
*/
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "Client","build", "index.html"));
});

/*
This starts the Express server, listening on a port specified by the PORT environment variable or 
defaulting to port 3000. It logs a message when the server starts.
*/
app.listen(process.env.PORT || 3000, () => {
  console.log("Server Started");
});

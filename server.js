const dotenv =require('dotenv')

dotenv.config({ path: "./config.env" });
const app = require("./app.js");


//Connecting to the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is live, Connecting and Logging to Port ${port}`);
});
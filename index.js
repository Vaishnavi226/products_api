//? This file will have the entry point of our application
const app = require("./app");
const dotenv = require("dotenv");

// configure the dotenv
dotenv.config();

const PORT = process.env.PORT || 8000; // if no prot is defined in .env then use 8000

app.listen(PORT, () => {
  console.log(`The server is running on Port ${PORT}`);
});

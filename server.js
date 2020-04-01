process.env.NODE_ENV = process.env.NODE_ENV || "development";

const configureExpress = require("./config/express");

const app = configureExpress();

app.listen(8000);

console.log("Server running on port 8000.");
module.exports = app;

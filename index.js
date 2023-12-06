const express = require("express");
const bodyParser = require("body-parser");
const usersRoutes = require("./routes/users");

const app = express();
const PORT = 5000; // Capitalized variable name because we are not going to change its value.

app.use(bodyParser.json()); // This means that we are gonna be using json data in our application.

app.use("/users", usersRoutes); // All the requests are going to start with /users.

app.get("/", (req, res)=>{
    res.send("Hello from homepage.");
});

app.listen(PORT, ()=>{
    console.log(`Server running on port: http://localhost:${PORT}`);
});
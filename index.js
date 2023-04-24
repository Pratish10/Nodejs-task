const express = require("express");
const app = express();
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");

app.use(express.json());
app.use(cors());

const server = require("http").createServer(app);
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("<h1>Hello from Pratish</h1>");
});

app.use("/user", userRoutes);
require("./db");

server.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});

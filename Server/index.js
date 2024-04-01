const connectToMogo = require("./db");
const express = require("express");
const cors = require("cors");
// const dotenv = require('dotenv')

// dotenv.config()
connectToMogo();
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

// Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`);
});

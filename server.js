const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 2333;

app.use(express.json());
app.use(cors());

app.use(require("./Routes/index"));

app.get("/", (req, res) => {
  res.send("Welcom to PROCG Testing server.");
});

app.listen(PORT, () => console.log(`Server is running ${PORT}.`));

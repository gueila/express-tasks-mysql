const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const taskRoutes = require("./routes/task");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use("/tasks", taskRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server on${PORT}`);
});

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const taskRoutes = require("./routes/task");

const app = express();
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use("/tasks", taskRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server on${PORT}`);
});

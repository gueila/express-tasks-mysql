const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const helmet = require("helmet");
const taskRoutes = require("./routes/task");
const errorHandler = require("./middleware/errorHandler");

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(helmet());
app.use(morgan("dev"));
app.use(errorHandler);
app.use("/tasks", taskRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server on${PORT}`);
});

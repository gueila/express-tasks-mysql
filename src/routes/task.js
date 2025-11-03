const express = require("express");
const router = express.Router();

const tasks = require("../controllers/taskController");

router.get("/", tasks.getTasks);
router.get("/:id", tasks.getTaskById);
router.post("/", tasks.createTask);

module.exports = router;

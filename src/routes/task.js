const express = require("express");
const { body, param, validationResult } = require("express-validator");
const router = express.Router();

const tasks = require("../controllers/taskController");

const validateBodyTask = [
  body("title")
    .isLength({ min: 1 })
    .withMessage("Title es requerido")
    .isString()
    .withMessage("Title es string")
    .trim()
    .escape(),
  body("content")
    .isLength({ min: 5 })
    .withMessage("Content es requerido")
    .isString()
    .withMessage("Content es string")
    .trim()
    .escape(),
];
const validateId = [
  param("id").isInt({ gt: 0 }).withMessage("El id mayor a 0 ").toInt(),
];

router.get("/", tasks.getTasks);
router.get("/:id", validateId, tasks.getTaskById);
router.post("/", validateBodyTask, tasks.createTask);

module.exports = router;

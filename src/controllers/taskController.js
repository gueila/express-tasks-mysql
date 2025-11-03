const taskModel = require("../models/taskModel");
const { validationResult } = require("express-validator");

const getTasks = async (req, res, next) => {
  try {
    const tasks = await taskModel.getTasks();
    res.json(tasks);
  } catch (error) {
    next(error);
  }
};

const getTaskById = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const task = await taskModel.getTaskById(req.params.id);
    if (task) {
      return res.json(task);
    }
    res.status(404).json({ message: "Tarea no encontrada" });
  } catch (error) {
    console.log("HE");

    next(error);
  }
};
const createTask = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const { title, content } = req.body;
    const task = await taskModel.createTask(title, content);
    res.json(task);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getTasks,
  getTaskById,
  createTask,
};

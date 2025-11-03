const taskModel = require("../models/taskModel");

const getTasks = async (req, res) => {
  try {
    const tasks = await taskModel.getTasks();
    console.log(tasks);
    
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTaskById = async (req, res) => {
  try {
    const task = await taskModel.getTaskById(req.params.id);
    if (task) {
      return res.json(task);
    }
    res.status(404).json({ message: "Tarea no encontrada" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const createTask = async (req, res) => {
  try {
    console.log(req.body);
    
    const { title, content } = req.body;
    const task = await taskModel.createTask(title, content);
    res.json(task)
  } catch (error) {
    console.log(error);
    
    res.status(404).json("No creado")
  }
};

module.exports = {
  getTasks,
  getTaskById,
  createTask
};

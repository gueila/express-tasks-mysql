const db = require("../config/db");

const getTasks = async () => {
  const conection = await db();
  try {
    const [results] = await conection.query("SELECT * FROM tasks");    
    return results;
  } catch (error) {
    console.log(error);
  } finally {
    conection.end();
  }
};

const getTaskById = async (id) => {
  const conection = await db();
  try {
    const [results] = await conection.query("SELECT * FROM tasks WHERE ID = ?", [
      id,
    ]);
    return results;
  } catch (error) {
  } finally {
    conection.end();
  }
};

const createTask = async (title, content) => {
  const conection = await db();
  try {
    const query = "INSERT INTO tasks(title, content) VALUES (?, ?)";
    const values = [title, content];
    const [rows] = await conection.query(query, values);
    return rows;
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    conection.end();
  }
};

module.exports = {
  getTasks,
  getTaskById,
  createTask,
};

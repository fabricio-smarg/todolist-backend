const express = require("express");

const router = express.Router();

const taskscontroller = require('./controlles/taskscontrollers');
const tasksMiddleware = require('./middlewares/tasksMiddleware');

router.get('/tasks', taskscontroller.getAll);
router.post('/tasks', tasksMiddleware.validateTittle, taskscontroller.createTask);
router.delete('/tasks/:id', taskscontroller.deleteTask);
router.put('/tasks/:id', tasksMiddleware.validateTittle, tasksMiddleware.validateStatus, taskscontroller.updateTask);

module.exports = router;
const tasksModel = require('../models/tasksModels');

const getAll = async (_req, res) => {
	const tasks = await tasksModel.getAll();
	return res.status(200).json(tasks);
};

const createTask = async (request, response) => {
  	const createdTask = await tasksModel.createTask(request.body);
  	return response.status(201).json(createdTask);
};

const deleteTask = async (req, res) => {
	const { id } = req.params;
	await tasksModel.deleteTask(id);
	return res.status(204).json();
};

const updateTask = async (req, rep) => {
	const { id } = req.params;
	await tasksModel.updateTask(id, req.body);
	return rep.status(204).json();
};

module.exports = {
	getAll, 
	createTask,
	deleteTask,
	updateTask, 
};
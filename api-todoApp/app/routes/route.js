module.exports = app => {
    const Todo = require('../controllers/todocontroller.js');

    var router = require('express').Router();

    router.get('/todos', Todo.findAll);
    router.get('/todos/:id', Todo.findById);
    router.post('/todos', Todo.create);
    router.put('/todos/:id', Todo.updated);
    router.patch('/todos/:id/status', Todo.updatedStatus);
    router.delete('/todos/:id', Todo.remove);

    app.use('/api', router);
}
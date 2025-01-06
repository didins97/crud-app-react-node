const {successResponse, errorResponse} = require('../helpers/responseFormatter');
const Todo = require('../models/todomodel.js');
const { body, validationResult } = require('express-validator');


exports.findAll = (req, res) => {
    Todo.GetAll((err, data) => {
        if (err)
            errorResponse(res, err, 500);
        else successResponse(res, data, 'Get data successfully', 200);
    });
}

exports.findById = (req, res) => {
    Todo.findById(req.params.id, (err, data) => {
        if (err)
            errorResponse(res, err, 500);
        else successResponse(res, data, 'Get data successfully', 200);
    });
}

exports.create = [
    body('title').isLength({ min: 3 }).withMessage('Title must be at least 3 characters long'),
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() });
        }

        Todo.create(new Todo(req.body), (err, data) => {
            if (err)
                errorResponse(res, err, 500);
            else successResponse(res, data, 'Create data successfully', 201);
        });
    }
]

exports.updated = [
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() });
        }

        // check todo.updated
        Todo.updateById(req.params.id, new Todo(req.body), (err, data) => {
            if (err)
                errorResponse(res, err, 500);
            else 
                successResponse(res, data, 'Update data successfully', 200);
        });
    }
]

exports.remove = (req, res) => {
    Todo.remove(req.params.id, (err, data) => {
        if (err)
            errorResponse(res, err, 500);
        else successResponse(res, "", 'Delete data successfully', 200);
    });
}

exports.updatedStatus = (req, res) => {
    Todo.updatedStatus(req.params.id, new Todo(req.body), (err, data) => {
        if (err)
            errorResponse(res, err, 500);
        else successResponse(res, data, 'Update data successfully', 200);  
    })
}
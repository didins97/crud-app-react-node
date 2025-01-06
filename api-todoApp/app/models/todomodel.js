const sql = require("./db.js");

const Todo = function(todo) {
    this.title = todo.title;
    this.completed = todo.completed;
    this.status = todo.status
    this.priority = todo.priority
};

Todo.GetAll = (result) => {
    sql.query('SELECT * FROM todo', (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(null, err);
            return;
        }
        console.log('todos: ', res);
        result(null, res);
    });
};

Todo.create = (newTodo, result) => {
    sql.query('INSERT INTO todo SET ?', newTodo, (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(err, null);
            return;
        }
        console.log('created todo: ', { id: res.insertId, ...newTodo });
        result(null, { id: res.insertId, ...newTodo });
    });
};

Todo.findById = (todoId, result) => {
    sql.query(`SELECT * FROM todo WHERE id = ${todoId}`, (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log('found todo: ', res[0]);
            result(null, res[0]);
            return;
        }
        result("Todo not found", null);
    });
};

Todo.updateById = (todoId, todo, result) => {
    sql.query(
        "UPDATE todo SET title = ?, completed = ?, priority = ?, status = ? WHERE id = ?",
        [todo.title, todo.completed, todo.priority, todo.status, todoId],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                result("Todo not found", null);
                return;
            }
            console.log("updated todo: ", { id: todoId, ...todo });
            result(null, { id: todoId, ...todo });
        }
    );
};

Todo.remove = (todoId, result) => {
    sql.query("DELETE FROM todo WHERE id = ?", todoId, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            result("Todo not found", null);
            return;
        }
        console.log("deleted todo with id: ", todoId);
        result(null, res);
    });
};

Todo.RemoveByIds = (todoIds, result) => {
    sql.query("DELETE FROM todo WHERE id IN (?)", [todoIds], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        result.forEach(id => {
            if (res.affectedRows == 0) {
                result("Todo not found", null);
                return;
            }
            console.log("deleted todo with id: ", id);
        });
        result(null, res);
    })
}

Todo.updatedStatus = (todoId, todo, result) => {
    if(todo.status == "completed") {
        todo.completed = true
    } else {
        todo.completed = false
    }

    sql.query(
        "UPDATE todo SET status = ?, completed = ? WHERE id = ?",
        [todo.status, todo.completed, todoId],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                result("Todo not found", null);
                return;
            }
            console.log("updated todo: ", { id: todoId, ...todo });
            result(null, { id: todoId, ...todo });
        }
    )
}

module.exports = Todo;
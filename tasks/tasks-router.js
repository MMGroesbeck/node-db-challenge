const express = require("express");

const Tasks = require("./tasks-model.js");

const router = express.Router();

router.get("/", (req, res) => {
    Tasks.getTasks()
        .then(tasks => {
            res.json(tasks.map(task => {
                return {...task, taskCompleted: (task.taskCompleted ? true : false)}
            }));
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: "Failed to get tasks." });
        });
});

router.post("/", (req, res) => {
    if (req.body.description && req.body.project_id) {
        Tasks.addTask(req.body)
            .then(task => {
                res.status(201).json(task);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ message: "Error while saving new task." });
            });
    } else {
        res.status(400).json({ message: "Task description and project_id are required." });
    }
})

module.exports = router;
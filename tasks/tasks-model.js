const db = require("../data/db-config.js");

module.exports = {
    getTasks,
    addTask
}

function getTasks() {
    return db
        .select(
            "tasks.id as taskID",
            "tasks.description as taskDescription",
            "tasks.completed as taskCompleted",
            "p.name as projectName",
            "p.description as projectDescription",
            "p.completed as projectCompleted"
        )
        .from("tasks")
        .join("projects as p", "p.id", "tasks.project_id")
}

function addTask(task) {
    return db("tasks")
        .insert({
            description: task.description,
            notes: task.notes,
            completed: task.completed || false,
            project_id: task.project_id
        })
}
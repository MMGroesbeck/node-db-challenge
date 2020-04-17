const db = require("../data/db-config.js");

module.exports = {
    getTasks,
    addTask
}

function getTasks() {
    return db
        .select(
            "tasks.id",
            "tasks.description",
            "tasks.completed as taskCompleted",
            "p.name",
            "p.description",
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
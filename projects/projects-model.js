const db = require("../data/db-config.js");

module.exports = {
    getProjects,
    addProject
}

function getProjects() {
    return db("projects");
}

function addProject(proj) {
    return db("projects")
        .insert({
            name: proj.name,
            description: proj.description,
            completed: proj.completed || false
        });
}
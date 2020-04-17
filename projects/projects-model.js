const db = require("../data/db-config.js");

module.exports = {
    getProjects,
    addProject,
    getProjectById,
    getProjByIdDetails
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

function getProjectById(id) {
    return db("projects").where({ id: id });
}

function getProjByIdDetails(id) {
    return getProjectById(id)
        .then(project => {
            const proj = {...project[0]}
            return db
                .select("id", "description", "notes", "completed")
                .from("tasks")
                .where({ project_id: id })
                .then(tasks => {
                    return db
                        .select("r.id", "r.name", "r.description")
                        .from("resources as r")
                        .join("projects_resources as pr", "pr.resource_id", "r.id")
                        .where({ project_id: id })
                        .then(rsrc => {
                            return {
                                ...proj,
                                completed: (proj.completed ? true : false ),
                                tasks: tasks.map(task => {
                                    return {
                                        ...task,
                                        completed: (task.completed ? true : false)
                                    }
                                }),
                                resources: rsrc
                            }
                        })
                })
                .catch(err => {
                    console.log(err);
                })

        })
}
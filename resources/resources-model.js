const db = require("../data/db-config.js");

module.exports = {
    getResources,
    addResource
}

function getResources() {
    return db("resources");
}

function addResource(newRes) {
    return db("resources")
        .insert({
            name: newRes.name,
            description: newRes.description
        })
}
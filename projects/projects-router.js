const express = require("express");

const Projects = require("./projects-model.js");

const router = express.Router();

router.get("/", (req, res) => {
    Projects.getProjects()
        .then(proj => {
            res.json(proj);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: "Failed to get projects." });
        });
})

router.post("/", (req, res) => {
    if (req.body.name) {
        Projects.addProject(req.body)
            .then(proj => {
                res.status(201).json(proj);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ message: "Error while saving new project." });
            });
    }
})

module.exports = router;
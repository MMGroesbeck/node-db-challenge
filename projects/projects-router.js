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
});

router.get("/:id", (req, res) => {
    const { id } = req.params
    Projects.getProjByIdDetails(id)
        .then(proj => {
            res.json(proj);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: "Failed to get project." });
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
    } else {
        res.status(400).json({ message: "Project name is required." });
    }
});

module.exports = router;
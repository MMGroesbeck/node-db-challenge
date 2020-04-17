const express = require("express");

const ProjectsRouter = require("./projects/projects-router.js");

const server = express();

server.use(express.json());

// router for /projects
server.use("/api/projects", ProjectsRouter);

// root endpoint
server.use("/", (req, res) => {
    res.status(200).json({ api: "up" });
});

module.exports = server;
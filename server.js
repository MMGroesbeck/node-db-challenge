const express = require("express");

const ProjectsRouter = require("./projects/projects-router.js");
const ResourcesRouter = require("./resources/resources-router.js");

const server = express();

server.use(express.json());

// routers
server.use("/api/projects", ProjectsRouter);
server.use("/api/resources", ResourcesRouter);

// root endpoint
server.use("/", (req, res) => {
    res.status(200).json({ api: "up" });
});

module.exports = server;
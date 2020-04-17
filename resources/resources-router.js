const express = require("express");

const Resources = require("./resources-model.js");

const router = express.Router();

router.get("/", (req, res) => {
    Resources.getResources()
        .then(r => {
            res.json(r);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: "Failed to get resources." });
        });
});

router.post("/", (req, res) => {
    if(req.body.name){
        Resources.addResource(req.body)
            .then(r => {
                res.status(201).json(r);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ message: "Error while saving new resource." });
            });
    } else {
        res.status(400).json({ message: "Resource name is required." });
    }
});

module.exports = router;
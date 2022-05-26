let mongoose = require("mongoose"),
    express = require("express"),
    router = express.Router();

let serviceSchema = require("../models/Service");

router.post("/create-trensaction", (req, res, next) => {
    serviceSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            console.log(data);
            res.json(data);
        }
    });
});

router.get("/", (req, res) => {
    serviceSchema.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});

module.exports = router;

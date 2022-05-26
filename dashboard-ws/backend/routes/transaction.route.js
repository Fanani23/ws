let mongoose = require("mongoose"),
    express = require("express"),
    router = express.Router();

let transactionSchema = require("../models/Transaction");

router.post("/create-trensaction", (req, res, next) => {
    transactionSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            console.log(data);
            res.json(data);
        }
    });
});

router.get("/", (req, res) => {
    transactionSchema.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});

module.exports = router;

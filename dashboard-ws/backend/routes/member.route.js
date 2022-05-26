let mongoose = require("mongoose"),
    express = require("express"),
    router = express.Router();

let memberSchema = require("../models/Member");

router.post("/create-member", (req, res, next) => {
    memberSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            console.log(data);
            res.json(data);
        }
    });
});

router.get("/", (req, res) => {
    memberSchema.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});

router.get("/vip", (req, res) => {
    memberSchema.find({membership:"vip"},(error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});
router.get("/reguler", (req, res) => {
    memberSchema.find({membership:"reguler"},(error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});

module.exports = router;

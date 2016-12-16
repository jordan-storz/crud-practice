var express = require('express');
var router = express.Router();
var User = require('../db/user'); // named with capitol U to relate the variable to the database entry
var Sticker = require('../db/sticker');

router.get('/:id', (req, res) => {
    var id = req.params.id;
    if (!isNaN(id)) {
        User.getOne(id)
            .then(function(result) {
                if (!result) {
                    res.json({
                        message: "nothing here"
                    })
                    console.log("nothing here");
                } else {
                    res.json(result)
                    console.log(result);
                }
            })
    } else {
        res.json({
            message: "invalid id"
        })
        console.log("invalid id");
    }
})

router.get('/:id/sticker', (req, res) => {
    var id = req.params.id;
    if (!isNaN(id)) {
        Sticker.getStickersByUserId(id)
            .then(function(result) {
                res.json(result)
            })
    } else {
        res.json({
            message: "invalid id"
        })
        console.log("invalid id");
    }
    // res.send(id) res.send sends back id as text
})

router.get('/', (req, res) => {
    User.getAll().then(function(result) {
        console.log(result);
        res.json(result);
    })
})

router.delete('/:id', (req, res) => {
    User.deactivate(req.params.id)
        .then(function(result) {
            res.json(result)
        })
})

module.exports = router;

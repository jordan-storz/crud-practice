var express = require('express');
var router = express.Router();
var User = require('../db/user'); // named with capitol U to relate the variable to the database entry

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


module.exports = router;

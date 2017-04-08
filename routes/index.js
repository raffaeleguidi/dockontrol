var express = require('express');
var docker = require('../lib/docker');
var router = express.Router();

var expresslru = require('express-lru');
var cache = expresslru({
    max: 1000,
    ttl: 5000,
    skip: function(req) {
        return !!req.user;
    }
});

/* GET home page. */
router.get('/', cache, function(req, res, next) {
    console.log("*** request not cached ***")
    docker.containers((err, containers) => {
        docker.images((err, images) => {
            res.render('index', { title: 'Dockontrol', containers: containers, images: images });
        })
    })
});

module.exports = router;

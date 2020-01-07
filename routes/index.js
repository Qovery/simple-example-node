const Qovery = require('qovery-client/src/Qovery');
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express', branchName: new Qovery().getBranchName()});
});

module.exports = router;

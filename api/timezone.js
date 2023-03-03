var express = require('express');
var router = express.Router();
const TimeZone = require('../crud/timezone');

// create TimeZone
router.post('/add',  async (req, res, next) => {
    try {
        let result = await TimeZone.addTimeZone(req.body);
        res.send({ status: 200, msg: "TimeZone added successfully", data: result });
    }
    catch (error) {
        res.send(error);
    }

})


// get one TimeZone by id 
router.get('/getOne/:id',  async (req, res, next) => {
    try {
        let result = await TimeZone.getOneTimeZoneByCond({id: req.params.id});
        res.send({ status: 200, msg: `data for id ${req.params.id}`, data: result });
    }
    catch (error) {
        res.send(error);
    }
});


// search one TimeZone by id 
router.post('/search',  async (req, res, next) => {
    try {
        let result = await TimeZone.getOneTimeZoneByCond(req.body);
        res.send({ status: 200, msg: `data for id ${req.params.id}`, data: result });
    }
    catch (error) {
        res.send(error);
    }
});


//list of all Accounts
router.get('/list',  async (req, res, next) => {
    try {
        let result = await TimeZone.getAllTimeZone();
        res.send({ status: 200, msg: `data for list of TimeZone`, data: result });
    }
    catch (error) {
        res.send(error);
    }
})



// get one TimeZone by id and update
router.put('/update/:id',  async (req, res, next) => {
    try {
        let result = await TimeZone.updateTimeZone(req.params.id, req.body);
        res.send({ status: 200, msg: `data for id ${req.params.id} is updated`, data: result });
    }
    catch (error) {
        res.send(error);
    }
});



// get one TimeZone by id and delete
router.delete('/delete/:id',  async (req, res, next) => {
    try {
        await TimeZone.destroyTimeZone(req.params.id);
        res.send({ status: 200, msg: `data for id ${req.params.id} is deleted` });
    }
    catch (error) {
        res.send(error);
    }
});

module.exports = router;
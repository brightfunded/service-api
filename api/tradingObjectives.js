var express = require('express');
var router = express.Router();
const TradingObjectives = require('../crud/tradingObjectives');

// create TradingObjectives
router.post('/add',  async (req, res, next) => {
    try {
        let result = await TradingObjectives.addTradingObjectives(req.body);
        res.send({ status: 200, msg: "TradingObjectives added successfully", data: result });
    }
    catch (error) {
        res.send(error);
    }

})


// get one TradingObjectives by id 
router.get('/getOne/:id',  async (req, res, next) => {
    try {
        let result = await TradingObjectives.getOneTradingObjectivesByCond({id: req.params.id});
        res.send({ status: 200, msg: `data for id ${req.params.id}`, data: result });
    }
    catch (error) {
        res.send(error);
    }
});


// search one TradingObjectives by id 
router.post('/search',  async (req, res, next) => {
    try {
        let result = await TradingObjectives.getOneTradingObjectivesByCond(req.body);
        res.send({ status: 200, msg: `data for id ${req.params.id}`, data: result });
    }
    catch (error) {
        res.send(error);
    }
});


//list of all Accounts
router.get('/list',  async (req, res, next) => {
    try {
        let result = await TradingObjectives.getAllTradingObjectives();
        res.send({ status: 200, msg: `data for list of TradingObjectives`, data: result });
    }
    catch (error) {
        res.send(error);
    }
})



// get one TradingObjectives by id and update
router.put('/update/:id',  async (req, res, next) => {
    try {
        let result = await TradingObjectives.updateTradingObjectives(req.params.id, req.body);
        res.send({ status: 200, msg: `data for id ${req.params.id} is updated`, data: result });
    }
    catch (error) {
        res.send(error);
    }
});



// get one TradingObjectives by id and delete
router.delete('/delete/:id',  async (req, res, next) => {
    try {
        await TradingObjectives.destroyTradingObjectives(req.params.id);
        res.send({ status: 200, msg: `data for id ${req.params.id} is deleted` });
    }
    catch (error) {
        res.send(error);
    }
});

module.exports = router;
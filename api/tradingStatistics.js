var express = require('express');
var router = express.Router();
const TradingStatistics = require('../crud/tradingStatistics');

// create TradingStatistics
router.post('/add',  async (req, res, next) => {
    try {
        let result = await TradingStatistics.addTradingStatistics(req.body);
        res.send({ status: 200, msg: "TradingStatistics added successfully", data: result });
    }
    catch (error) {
        res.send(error);
    }

})


// get one TradingStatistics by id 
router.get('/getOne/:id',  async (req, res, next) => {
    try {
        let result = await TradingStatistics.getOneTradingStatisticsByCond({id: req.params.id});
        res.send({ status: 200, msg: `data for id ${req.params.id}`, data: result });
    }
    catch (error) {
        res.send(error);
    }
});


// search one TradingStatistics by id 
router.post('/search',  async (req, res, next) => {
    try {
        let result = await TradingStatistics.getOneTradingStatisticsByCond(req.body);
        res.send({ status: 200, msg: `data for id ${req.params.id}`, data: result });
    }
    catch (error) {
        res.send(error);
    }
});


//list of all Accounts
router.get('/list',  async (req, res, next) => {
    try {
        let result = await TradingStatistics.getAllTradingStatistics();
        res.send({ status: 200, msg: `data for list of TradingStatistics`, data: result });
    }
    catch (error) {
        res.send(error);
    }
})



// get one TradingStatistics by id and update
router.put('/update/:id',  async (req, res, next) => {
    try {
        let result = await TradingStatistics.updateTradingStatistics(req.params.id, req.body);
        res.send({ status: 200, msg: `data for id ${req.params.id} is updated`, data: result });
    }
    catch (error) {
        res.send(error);
    }
});



// get one TradingStatistics by id and delete
router.delete('/delete/:id',  async (req, res, next) => {
    try {
        await TradingStatistics.destroyTradingStatistics(req.params.id);
        res.send({ status: 200, msg: `data for id ${req.params.id} is deleted` });
    }
    catch (error) {
        res.send(error);
    }
});

module.exports = router;
var express = require('express');
var router = express.Router();
const TradingJournal = require('../crud/tradingJournal');

// create TradingJournal
router.post('/add',  async (req, res, next) => {
    try {
        let result = await TradingJournal.addTradingJournal(req.body);
        res.send({ status: 200, msg: "TradingJournal added successfully", data: result });
    }
    catch (error) {
        res.send(error);
    }

})


// get one TradingJournal by id 
router.get('/getOne/:id',  async (req, res, next) => {
    try {
        let result = await TradingJournal.getOneTradingJournalByCond({id: req.params.id});
        res.send({ status: 200, msg: `data for id ${req.params.id}`, data: result });
    }
    catch (error) {
        res.send(error);
    }
});


// search one TradingJournal by id 
router.post('/search',  async (req, res, next) => {
    try {
        let result = await TradingJournal.getOneTradingJournalByCond(req.body);
        res.send({ status: 200, msg: `data for id ${req.params.id}`, data: result });
    }
    catch (error) {
        res.send(error);
    }
});


//list of all Accounts
router.get('/list',  async (req, res, next) => {
    try {
        let result = await TradingJournal.getAllTradingJournal();
        res.send({ status: 200, msg: `data for list of TradingJournal`, data: result });
    }
    catch (error) {
        res.send(error);
    }
})



// get one TradingJournal by id and update
router.put('/update/:id',  async (req, res, next) => {
    try {
        let result = await TradingJournal.updateTradingJournal(req.params.id, req.body);
        res.send({ status: 200, msg: `data for id ${req.params.id} is updated`, data: result });
    }
    catch (error) {
        res.send(error);
    }
});



// get one TradingJournal by id and delete
router.delete('/delete/:id',  async (req, res, next) => {
    try {
        await TradingJournal.destroyTradingJournal(req.params.id);
        res.send({ status: 200, msg: `data for id ${req.params.id} is deleted` });
    }
    catch (error) {
        res.send(error);
    }
});

module.exports = router;
var express = require('express');
var router = express.Router();
const Forex = require('../crud/forex');

// create Forex
router.post('/add',  async (req, res, next) => {
    try {
        let result = await Forex.addForex(req.body);
        res.send({ status: 200, msg: "Forex added successfully", data: result });
    }
    catch (error) {
        res.send(error);
    }

})


// get one Forex by id 
router.get('/getOne/:id',  async (req, res, next) => {
    try {
        let result = await Forex.getOneForexByCond({id: req.params.id});
        res.send({ status: 200, msg: `data for id ${req.params.id}`, data: result });
    }
    catch (error) {
        res.send(error);
    }
});


// search one Forex by id 
router.post('/search',  async (req, res, next) => {
    try {
        let result = await Forex.getOneForexByCond(req.body);
        res.send({ status: 200, msg: `data for id ${req.params.id}`, data: result });
    }
    catch (error) {
        res.send(error);
    }
});


//list of all Accounts
router.get('/list',  async (req, res, next) => {
    try {
        let result = await Forex.getAllForex();
        res.send({ status: 200, msg: `data for list of Forex`, data: result });
    }
    catch (error) {
        res.send(error);
    }
})



// get one Forex by id and update
router.put('/update/:id',  async (req, res, next) => {
    try {
        let result = await Forex.updateForex(req.params.id, req.body);
        res.send({ status: 200, msg: `data for id ${req.params.id} is updated`, data: result });
    }
    catch (error) {
        res.send(error);
    }
});



// get one Forex by id and delete
router.delete('/delete/:id',  async (req, res, next) => {
    try {
        await Forex.destroyForex(req.params.id);
        res.send({ status: 200, msg: `data for id ${req.params.id} is deleted` });
    }
    catch (error) {
        res.send(error);
    }
});

module.exports = router;
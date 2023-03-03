var express = require('express');
var router = express.Router();
const Country = require('../crud/country');

// create Country
router.post('/add',  async (req, res, next) => {
    try {
        let result = await Country.addCountry(req.body);
        res.send({ status: 200, msg: "Country added successfully", data: result });
    }
    catch (error) {
        res.send(error);
    }

})


// get one Country by id 
router.get('/getOne/:id',  async (req, res, next) => {
    try {
        let result = await Country.getOneCountryByCond({id: req.params.id});
        res.send({ status: 200, msg: `data for id ${req.params.id}`, data: result });
    }
    catch (error) {
        res.send(error);
    }
});


// search one Country by id 
router.post('/search',  async (req, res, next) => {
    try {
        let result = await Country.getOneCountryByCond(req.body);
        res.send({ status: 200, msg: `data for id ${req.params.id}`, data: result });
    }
    catch (error) {
        res.send(error);
    }
});


//list of all Accounts
router.get('/list',  async (req, res, next) => {
    try {
        let result = await Country.getAllCountry();
        res.send({ status: 200, msg: `data for list of Country`, data: result });
    }
    catch (error) {
        res.send(error);
    }
})



// get one Country by id and update
router.put('/update/:id',  async (req, res, next) => {
    try {
        let result = await Country.updateCountry(req.params.id, req.body);
        res.send({ status: 200, msg: `data for id ${req.params.id} is updated`, data: result });
    }
    catch (error) {
        res.send(error);
    }
});



// get one Country by id and delete
router.delete('/delete/:id',  async (req, res, next) => {
    try {
        await Country.destroyCountry(req.params.id);
        res.send({ status: 200, msg: `data for id ${req.params.id} is deleted` });
    }
    catch (error) {
        res.send(error);
    }
});

module.exports = router;
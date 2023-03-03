var express = require('express');
var router = express.Router();
const Account = require('../crud/account');

// create Account
router.post('/add',  async (req, res, next) => {
    try {
        let result = await Account.addAccount(req.body);
        res.send({ status: 200, msg: "Account added successfully", data: result });
    }
    catch (error) {
        res.send(error);
    }

})


// get one Account by id 
router.get('/getOne/:id',  async (req, res, next) => {
    try {
        let result = await Account.getOneAccountByCond({id: req.params.id});
        res.send({ status: 200, msg: `data for id ${req.params.id}`, data: result });
    }
    catch (error) {
        res.send(error);
    }
});


// search one Account by id 
router.post('/search',  async (req, res, next) => {
    try {
        let result = await Account.getOneAccountByCond(req.body);
        res.send({ status: 200, msg: `data for id ${req.params.id}`, data: result });
    }
    catch (error) {
        res.send(error);
    }
});


//list of all Accounts
router.get('/list',  async (req, res, next) => {
    try {
        let result = await Account.getAllAccount();
        res.send({ status: 200, msg: `data for list of Account`, data: result });
    }
    catch (error) {
        res.send(error);
    }
})



// get one Account by id and update
router.put('/update/:id',  async (req, res, next) => {
    try {
        let result = await Account.updateAccount(req.params.id, req.body);
        res.send({ status: 200, msg: `data for id ${req.params.id} is updated`, data: result });
    }
    catch (error) {
        res.send(error);
    }
});



// get one Account by id and delete
router.delete('/delete/:id',  async (req, res, next) => {
    try {
        await Account.destroyAccount(req.params.id);
        res.send({ status: 200, msg: `data for id ${req.params.id} is deleted` });
    }
    catch (error) {
        res.send(error);
    }
});

module.exports = router;
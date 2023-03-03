var express = require('express');
var router = express.Router();
const Language = require('../crud/language');

// create Language
router.post('/add',  async (req, res, next) => {
    try {
        let result = await Language.addLanguage(req.body);
        res.send({ status: 200, msg: "Language added successfully", data: result });
    }
    catch (error) {
        res.send(error);
    }

})


// get one Language by id 
router.get('/getOne/:id',  async (req, res, next) => {
    try {
        let result = await Language.getOneLanguageByCond({id: req.params.id});
        res.send({ status: 200, msg: `data for id ${req.params.id}`, data: result });
    }
    catch (error) {
        res.send(error);
    }
});


// search one Language by id 
router.post('/search',  async (req, res, next) => {
    try {
        let result = await Language.getOneLanguageByCond(req.body);
        res.send({ status: 200, msg: `data for id ${req.params.id}`, data: result });
    }
    catch (error) {
        res.send(error);
    }
});


//list of all Accounts
router.get('/list',  async (req, res, next) => {
    try {
        let result = await Language.getAllLanguage();
        res.send({ status: 200, msg: `data for list of Language`, data: result });
    }
    catch (error) {
        res.send(error);
    }
})



// get one Language by id and update
router.put('/update/:id',  async (req, res, next) => {
    try {
        let result = await Language.updateLanguage(req.params.id, req.body);
        res.send({ status: 200, msg: `data for id ${req.params.id} is updated`, data: result });
    }
    catch (error) {
        res.send(error);
    }
});



// get one Language by id and delete
router.delete('/delete/:id',  async (req, res, next) => {
    try {
        await Language.destroyLanguage(req.params.id);
        res.send({ status: 200, msg: `data for id ${req.params.id} is deleted` });
    }
    catch (error) {
        res.send(error);
    }
});

module.exports = router;
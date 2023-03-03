const express = require('express');
const router = express.Router();

/*  #swagger.tags = ['Account']
    #swagger.description = 'Endpoint of Account Endpoints.' */
router.use('/account', require('../api/account'));

/*  #swagger.tags = ['Country']
    #swagger.description = 'Endpoint of Country Endpoints.' */
router.use('/country', require('../api/country'));

/*  #swagger.tags = ['Forex']
    #swagger.description = 'Endpoint of Forex Endpoints.' */
router.use('/forex', require('../api/forex'));

/*  #swagger.tags = ['Language']
    #swagger.description = 'Endpoint of Language Endpoints.' */
router.use('/language', require('../api/language'));

/*  #swagger.tags = ['Time Zone']
    #swagger.description = 'Endpoint of Time Zone Endpoints.' */
router.use('/timezone', require('../api/timezone'));

/*  #swagger.tags = ['Trading Journal']
    #swagger.description = 'Endpoint of Trading Journal Endpoints.' */
router.use('/tradingJournal', require('../api/tradingJournal'));

/*  #swagger.tags = ['Trading Objectives']
    #swagger.description = 'Endpoint of Trading Objectives Endpoints.' */
router.use('/tradingObjectives', require('../api/tradingObjectives'));

/*  #swagger.tags = ['Trading Statitics']
    #swagger.description = 'Endpoint of Trading Statitics Endpoints.' */
router.use('/tradingStatistics', require('../api/tradingStatistics'));

/*  #swagger.tags = ['User']
    #swagger.description = 'Endpoint of User Endpoints.' */
router.use('/user', require('../api/user'));


module.exports = router;
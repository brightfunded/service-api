const TradingStatistics = require('../model/tradingStatistics');



let addTradingStatistics = async (obj) => {
   return await TradingStatistics.create(obj);
}


let updateTradingStatistics = async (id, obj) => {
   return await TradingStatistics.update(obj, { where: {id: id} });
}

let destroyTradingStatistics = async (id) => {
    return await TradingStatistics.destroy({ where: { id: id } });
}


let getAllTradingStatistics = async () => {
    return await TradingStatistics.findAll();
}


let getAllTradingStatisticsByCond = async (cond) => {
    return await TradingStatistics.findAll({ where: cond });   ///////////{ where: { TradingStatisticsid: obj.TradingStatisticsId} },
}


let getOneTradingStatisticsByCond = async (cond) => {
    return await TradingStatistics.findOne({ where: cond });   ///////////{ where: { TradingStatisticsid: obj.TradingStatisticsId} },
}


let getAllTradingStatisticsByAttr = async (attr) => {
    return await TradingStatistics.findAll({
        attributes: attr
    });
}


let getAllTradingStatisticsByCondAndAttr = async (cond,attr) => {
    return await TradingStatistics.findAll({ 
        where: cond ,
        attributes: attr
    });   ///////////{ where: { TradingStatisticsid: obj.TradingStatisticsId} },
}


let getOneTradingStatisticsByCondAndAttr = async (cond,attr) => {
    return await TradingStatistics.findOne({ 
        where: cond ,
        attributes: attr
    });   ///////////{ where: { TradingStatisticsid: obj.TradingStatisticsId} },
}



module.exports = {
    addTradingStatistics,
    updateTradingStatistics,
    destroyTradingStatistics,
    getAllTradingStatistics,
    getAllTradingStatisticsByCond,
    getOneTradingStatisticsByCond,
    getAllTradingStatisticsByAttr,
    getAllTradingStatisticsByCondAndAttr,
    getOneTradingStatisticsByCondAndAttr
}
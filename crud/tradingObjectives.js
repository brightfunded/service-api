const TradingObjectives = require('../model/tradingObjectives');



let addTradingObjectives = async (obj) => {
   return await TradingObjectives.create(obj);
}


let updateTradingObjectives = async (id, obj) => {
   return await TradingObjectives.update(obj, { where: {id: id} });
}

let destroyTradingObjectives = async (id) => {
    return await TradingObjectives.destroy({ where: { id: id } });
}

let getAllTradingObjectives = async () => {
    return await TradingObjectives.findAll();
}


let getAllTradingObjectivesByCond = async (cond) => {
    return await TradingObjectives.findAll({ where: cond });   ///////////{ where: { TradingObjectivesid: obj.TradingObjectivesId} },
}


let getOneTradingObjectivesByCond = async (cond) => {
    return await TradingObjectives.findOne({ where: cond });   ///////////{ where: { TradingObjectivesid: obj.TradingObjectivesId} },
}


let getAllTradingObjectivesByAttr = async (attr) => {
    return await TradingObjectives.findAll({
        attributes: attr
    });
}


let getAllTradingObjectivesByCondAndAttr = async (cond,attr) => {
    return await TradingObjectives.findAll({ 
        where: cond ,
        attributes: attr
    });   ///////////{ where: { TradingObjectivesid: obj.TradingObjectivesId} },
}


let getOneTradingObjectivesByCondAndAttr = async (cond,attr) => {
    return await TradingObjectives.findOne({ 
        where: cond ,
        attributes: attr
    });   ///////////{ where: { TradingObjectivesid: obj.TradingObjectivesId} },
}



module.exports = {
    addTradingObjectives,
    updateTradingObjectives,
    destroyTradingObjectives,
    getAllTradingObjectives,
    getAllTradingObjectivesByCond,
    getOneTradingObjectivesByCond,
    getAllTradingObjectivesByAttr,
    getAllTradingObjectivesByCondAndAttr,
    getOneTradingObjectivesByCondAndAttr
}
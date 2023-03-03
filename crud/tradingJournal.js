const TradingJournal = require('../model/tradingJournal');



let addTradingJournal = async (obj) => {
   return await TradingJournal.create(obj);
}


let updateTradingJournal = async (id, obj) => {
   return await TradingJournal.update(obj, { where: {id: id} });
}

let destroyTradingJournal = async (id) => {
    return await TradingJournal.destroy({ where: { id: id } });
}

let getAllTradingJournal = async () => {
    return await TradingJournal.findAll();
}


let getAllTradingJournalByCond = async (cond) => {
    return await TradingJournal.findAll({ where: cond });   ///////////{ where: { TradingJournalid: obj.TradingJournalId} },
}


let getOneTradingJournalByCond = async (cond) => {
    return await TradingJournal.findOne({ where: cond });   ///////////{ where: { TradingJournalid: obj.TradingJournalId} },
}


let getAllTradingJournalByAttr = async (attr) => {
    return await TradingJournal.findAll({
        attributes: attr
    });
}


let getAllTradingJournalByCondAndAttr = async (cond,attr) => {
    return await TradingJournal.findAll({ 
        where: cond ,
        attributes: attr
    });   ///////////{ where: { TradingJournalid: obj.TradingJournalId} },
}


let getOneTradingJournalByCondAndAttr = async (cond,attr) => {
    return await TradingJournal.findOne({ 
        where: cond ,
        attributes: attr
    });   ///////////{ where: { TradingJournalid: obj.TradingJournalId} },
}



module.exports = {
    addTradingJournal,
    updateTradingJournal,
    destroyTradingJournal,
    getAllTradingJournal,
    getAllTradingJournalByCond,
    getOneTradingJournalByCond,
    getAllTradingJournalByAttr,
    getAllTradingJournalByCondAndAttr,
    getOneTradingJournalByCondAndAttr
}
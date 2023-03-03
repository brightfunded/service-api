const Forex = require('../model/forex');



let addForex = async (obj) => {
   return await Forex.create(obj);
}


let updateForex = async (id, obj) => {
   return await Forex.update(obj, { where: {id: id} });
}

let destroyForex = async (id) => {
    return await Forex.destroy({ where: { id: id } });
}

let getAllForex = async () => {
    return await Forex.findAll();
}


let getAllForexByCond = async (cond) => {
    return await Forex.findAll({ where: cond });   ///////////{ where: { Forexid: obj.ForexId} },
}


let getOneForexByCond = async (cond) => {
    return await Forex.findOne({ where: cond });   ///////////{ where: { Forexid: obj.ForexId} },
}


let getAllForexByAttr = async (attr) => {
    return await Forex.findAll({
        attributes: attr
    });
}


let getAllForexByCondAndAttr = async (cond,attr) => {
    return await Forex.findAll({ 
        where: cond ,
        attributes: attr
    });   ///////////{ where: { Forexid: obj.ForexId} },
}


let getOneForexByCondAndAttr = async (cond,attr) => {
    return await Forex.findOne({ 
        where: cond ,
        attributes: attr
    });   ///////////{ where: { Forexid: obj.ForexId} },
}



module.exports = {
    addForex,
    updateForex,
    destroyForex,
    getAllForex,
    getAllForexByCond,
    getOneForexByCond,
    getAllForexByAttr,
    getAllForexByCondAndAttr,
    getOneForexByCondAndAttr
}
const TimeZone = require('../model/timezone');



let addTimeZone = async (obj) => {
   return await TimeZone.create(obj);
}


let updateTimeZone = async (id, obj) => {
   return await TimeZone.update(obj, { where: {id: id} });
}

let destroyTimeZone = async (id) => {
    return await TimeZone.destroy({ where: { id: id } });
}

let getAllTimeZone = async () => {
    return await TimeZone.findAll();
}


let getAllTimeZoneByCond = async (cond) => {
    return await TimeZone.findAll({ where: cond });   ///////////{ where: { TimeZoneid: obj.TimeZoneId} },
}


let getOneTimeZoneByCond = async (cond) => {
    return await TimeZone.findOne({ where: cond });   ///////////{ where: { TimeZoneid: obj.TimeZoneId} },
}


let getAllTimeZoneByAttr = async (attr) => {
    return await TimeZone.findAll({
        attributes: attr
    });
}


let getAllTimeZoneByCondAndAttr = async (cond,attr) => {
    return await TimeZone.findAll({ 
        where: cond ,
        attributes: attr
    });   ///////////{ where: { TimeZoneid: obj.TimeZoneId} },
}


let getOneTimeZoneByCondAndAttr = async (cond,attr) => {
    return await TimeZone.findOne({ 
        where: cond ,
        attributes: attr
    });   ///////////{ where: { TimeZoneid: obj.TimeZoneId} },
}



module.exports = {
    addTimeZone,
    updateTimeZone,
    destroyTimeZone,
    getAllTimeZone,
    getAllTimeZoneByCond,
    getOneTimeZoneByCond,
    getAllTimeZoneByAttr,
    getAllTimeZoneByCondAndAttr,
    getOneTimeZoneByCondAndAttr
}
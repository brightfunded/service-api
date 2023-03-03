const Country = require('../model/country');



let addCountry = async (obj) => {
   return await Country.create(obj);
}


let updateCountry = async (id, obj) => {
   return await Country.update(obj, { where: {id: id} });
}

let destroyCountry = async (id) => {
    return await Country.destroy({ where: { id: id } });
}


let getAllCountry = async () => {
    return await Country.findAll();
}


let getAllCountryByCond = async (cond) => {
    return await Country.findAll({ where: cond });   ///////////{ where: { Countryid: obj.CountryId} },
}


let getOneCountryByCond = async (cond) => {
    return await Country.findOne({ where: cond });   ///////////{ where: { Countryid: obj.CountryId} },
}


let getAllCountryByAttr = async (attr) => {
    return await Country.findAll({
        attributes: attr
    });
}


let getAllCountryByCondAndAttr = async (cond,attr) => {
    return await Country.findAll({ 
        where: cond ,
        attributes: attr
    });   ///////////{ where: { Countryid: obj.CountryId} },
}


let getOneCountryByCondAndAttr = async (cond,attr) => {
    return await Country.findOne({ 
        where: cond ,
        attributes: attr
    });   ///////////{ where: { Countryid: obj.CountryId} },
}



module.exports = {
    addCountry,
    updateCountry,
    destroyCountry,
    getAllCountry,
    getAllCountryByCond,
    getOneCountryByCond,
    getAllCountryByAttr,
    getAllCountryByCondAndAttr,
    getOneCountryByCondAndAttr
}
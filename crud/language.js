const Language = require('../model/language');



let addLanguage = async (obj) => {
   return await Language.create(obj);
}


let updateLanguage = async (id, obj) => {
   return await Language.update(obj, { where: {id: id} });
}

let destroyLanguage = async (id) => {
    return await Language.destroy({ where: { id: id } });
}

let getAllLanguage = async () => {
    return await Language.findAll();
}


let getAllLanguageByCond = async (cond) => {
    return await Language.findAll({ where: cond });   ///////////{ where: { Languageid: obj.LanguageId} },
}


let getOneLanguageByCond = async (cond) => {
    return await Language.findOne({ where: cond });   ///////////{ where: { Languageid: obj.LanguageId} },
}


let getAllLanguageByAttr = async (attr) => {
    return await Language.findAll({
        attributes: attr
    });
}


let getAllLanguageByCondAndAttr = async (cond,attr) => {
    return await Language.findAll({ 
        where: cond ,
        attributes: attr
    });   ///////////{ where: { Languageid: obj.LanguageId} },
}


let getOneLanguageByCondAndAttr = async (cond,attr) => {
    return await Language.findOne({ 
        where: cond ,
        attributes: attr
    });   ///////////{ where: { Languageid: obj.LanguageId} },
}



module.exports = {
    addLanguage,
    updateLanguage,
    destroyLanguage,
    getAllLanguage,
    getAllLanguageByCond,
    getOneLanguageByCond,
    getAllLanguageByAttr,
    getAllLanguageByCondAndAttr,
    getOneLanguageByCondAndAttr
}
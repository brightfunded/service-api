const Account = require('../model/account');



let addAccount = async (obj) => {
    return await Account.create(obj);
}


let updateAccount = async (id, obj) => {
    return await Account.update(obj, { where: { id: id } });
}

let destroyAccount = async (id) => {
    return await Account.destroy({ where: { id: id } });
}

let getAllAccount = async () => {
    return await Account.findAll();
}


let getAllAccountByCond = async (cond) => {
    return await Account.findAll({ where: cond });   ///////////{ where: { Accountid: obj.AccountId} },
}


let getOneAccountByCond = async (cond) => {
    return await Account.findOne({ where: cond });   ///////////{ where: { Accountid: obj.AccountId} },
}


let getAllAccountByAttr = async (attr) => {
    return await Account.findAll({
        attributes: attr
    });
}


let getAllAccountByCondAndAttr = async (cond, attr) => {
    return await Account.findAll({
        where: cond,
        attributes: attr
    });   ///////////{ where: { Accountid: obj.AccountId} },
}


let getOneAccountByCondAndAttr = async (cond, attr) => {
    return await Account.findOne({
        where: cond,
        attributes: attr
    });   ///////////{ where: { Accountid: obj.AccountId} },
}



module.exports = {
    addAccount,
    updateAccount,
    destroyAccount,
    getAllAccount,
    getAllAccountByCond,
    getOneAccountByCond,
    getAllAccountByAttr,
    getAllAccountByCondAndAttr,
    getOneAccountByCondAndAttr
}
const user = require('../model/user');



let addUser = async (obj) => {
   return await user.create(obj);
}


let updateUser = async (id, obj) => {
   return await user.update(obj, { where: {id: id} });
}

let destroyUser = async (id) => {
    return await user.destroy({ where: { id: id } });
}

let getAllUser = async () => {
    return await user.findAll();
}


let getAllUserByCond = async (cond) => {
    return await user.findAll({ where: cond });   ///////////{ where: { Userid: obj.UserId} },
}


let getOneUserByCond = async (cond) => {
    return await user.findOne({ where: cond });   ///////////{ where: { Userid: obj.UserId} },
}


let getAllUserByAttr = async (attr) => {
    return await user.findAll({
        attributes: attr
    });
}


let getAllUserByCondAndAttr = async (cond,attr) => {
    return await user.findAll({ 
        where: cond ,
        attributes: attr
    });   ///////////{ where: { Userid: obj.UserId} },
}


let getOneUserByCondAndAttr = async (cond,attr) => {
    return await user.findOne({ 
        where: cond ,
        attributes: attr
    });   ///////////{ where: { Userid: obj.UserId} },
}



module.exports = {
    addUser,
    updateUser,
    destroyUser,
    getAllUser,
    getAllUserByCond,
    getOneUserByCond,
    getAllUserByAttr,
    getAllUserByCondAndAttr,
    getOneUserByCondAndAttr
}
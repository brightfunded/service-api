var express = require('express');
var router = express.Router();
const User = require('../crud/user');
const bcrypt = require("bcryptjs");
const { sendMail, modifymessageFromTemplate } = require("../helpers/mailer");

// create User
router.post('/add', async (req, res, next) => {
    try {
        let result = await User.getOneUserByCond({ userEmail: req.body.userEmail });
        result = JSON.parse(JSON.stringify(result));
        console.log(result)
        if (result === null) {
            req.body.userPassword = await bcrypt.hash(req.body.userPassword, 10);
            let result = await User.addUser(req.body);
            let optionToChange = {
                host: req.headers.referer,
                username: req.body.userName
            };
            let htmlToSend = await modifymessageFromTemplate("welcome.html", optionToChange);
            sendMail(req.body.userEmail, "Welcome to Bright Funded", htmlToSend);
            res.send({ status: 200, msg: "User added successfully", data: result });
        }
        else{
            res.send({ status: 200, msg: "User already exist", data: result });
        }
    }
    catch (error) {
        console.log(error)
        res.send(error);
    }

})


// send forgot password link
router.put("/forgot-password", async (req, res) => {
    const SUBJECT = "Bright Funded - Password Reset Link";
    let obj = req.body;
    let token = Math.floor(100000 + Math.random() * 900000);
    let result = await User.getOneUserByCond(req.body);
    result = JSON.parse(JSON.stringify(result));
    if (result) {
        let optionToChange = {
            host: req.headers.referer,
            username: result.userName,
            email: Buffer.from(obj.userEmail).toString('base64'),
            token: Buffer.from(token.toString()).toString('base64'),
        };
        await User.updateUser(result.id, { token: token });
        let htmlToSend = await modifymessageFromTemplate("resetpassword.html", optionToChange);
        sendMail(obj.userEmail, SUBJECT, htmlToSend);
        res.send({ status: 200, msg: `Reset password link send to your email ${obj.userEmail}`, data: null });
    } else {
        res.send({ status: 404, msg: "Your given wrong email", data: null });
    }
});


// reset password
router.post("/reset-password", async (req, res) => {
    try {
        let obj = req.body;
        obj.userPassword = await bcrypt.hash(obj.userPassword, 10);
        let user = await User.getOneUserByCond({ userEmail: obj.email, token: obj.token });
        user = JSON.parse(JSON.stringify(user));
        if (user) {
            let result = await User.updateUser(user.id, {
                token: null,
                userPassword: obj.userPassword,
            });
            res.send({ status: 200, msg: `data for id ${user.id} is updated`, data: result });
        } else {
            res.send({ status: 404, msg: "Your given wrong email or token or link is expired", data: null });
        }
    } catch (error) {
        res.send({ status: 500, msg: error, data: null });
    }
});



// get one User by id 
router.get('/getOne/:id', async (req, res, next) => {
    try {
        let result = await User.getOneUserByCond({ id: req.params.id });
        res.send({ status: 200, msg: `data for id ${req.params.id}`, data: result });
    }
    catch (error) {
        res.send(error);
    }
});


// search one User by id 
router.post('/search', async (req, res, next) => {
    try {
        let result = await User.getOneUserByCond(req.body);
        res.send({ status: 200, msg: `data for user`, data: result });
    }
    catch (error) {
        res.send(error);
    }
});


// search one User by id 
router.post('/login', async (req, res, next) => {
    try {
        let result = await User.getOneUserByCond({ userEmail: req.body.userEmail });
        if(result) {
            const hash = await bcrypt.compare(req.body.userPassword, result.userPassword);
            if (!hash) {
                res.send({ status: 403, msg: "Invalid credentials", data: null});
            }
            res.send({ status: 200, msg: `data for user`, data: result });
        }
        else {
            res.send({ status: 200, msg: `user doesnot exists`, data: null });
        }
        
    }
    catch (error) {
        res.send(error);
    }
});


//list of all Accounts
router.get('/list', async (req, res, next) => {
    try {
        let result = await User.getAllUser();
        res.send({ status: 200, msg: `data for list of User`, data: result });
    }
    catch (error) {
        res.send(error);
    }
})



// get one User by id and update
router.put('/update/:id', async (req, res, next) => {
    try {
        if(req.body.userPassword) {
            req.body.userPassword = await bcrypt.hash(req.body.userPassword, 10);
        }
        let result = await User.updateUser(req.params.id, req.body);
        res.send({ status: 200, msg: `data for id ${req.params.id} is updated`, data: result });
    }
    catch (error) {
        res.send(error);
    }
});



// get one User by id and delete
router.delete('/delete/:id', async (req, res, next) => {
    try {
        await User.destroyUser(req.params.id);
        res.send({ status: 200, msg: `data for id ${req.params.id} is deleted` });
    }
    catch (error) {
        res.send(error);
    }
});

module.exports = router;
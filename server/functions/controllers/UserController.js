var user = require('../models/UserModel');
var util = require('../utils/response');
var message = require('../utils/messages.json');

module.exports.controller = function (server) {

    server.post('/user_login', userLogin);
    server.post('/user_register', userRegister);
    server.get('/forget_password/:email/:para', forgetPassword);
    server.put('/update_password', updatePassword);
    server.put('/re_update_password', reUpdatePassword);
    server.put('/user_update', userUpdate);
    server.put('/user_update1', userUpdate1);
    server.post('/user_update_profile', userUpdateProfile);
    server.post('/check_reset_pass_para', checkResetPasswordPara);
    server.get('/user_details/:id', userDetails);
    server.del('/delete_user/:id', deleteUser);
    server.put('/update_user_language', updateUserLanguage);
    server.get('/user_list_by_org_id/:id', userListByOrgId);
    server.post('/create_user_by_client_admin', createUserByClientAdmin);
    server.post('/send_email_to_contributors', sendEmailContributors);
    server.post('/create_user_by_csv', createUserByCsv);
    server.put('/update_user_image', updateUserImage);
    server.get('/new_user_details/:id', newUserDetails);
    server.post('/test_password', testPassword);

    function testPassword(req, res, next) {
        return next();
    }

    function newUserDetails(req, res, next) {
        return next();
    }

    function createUserByCsv(req, res, next) {
        return next();
    }

    function sendEmailContributors(req, res, next) {
        return next();
    }

    function userUpdateProfile(req, res, next) {
        return next();
    };

    function deleteUser(req, res, next) {
        return next();
    }

    function createUserByClientAdmin(req, res, next) {
        return next();
    }

    function userListByOrgId(req, res, next) {
        return next();
    };

    function userDetails(req, res, next) {
          return next();
    }

    function checkResetPasswordPara(req, res, next) {
        return next();
    };

    function userLogin(req, res, next) {
        return next();
    };

    function userRegister(req, res, next) {
        return next();
    };

    function forgetPassword(req, res, next) {
        return next();
    };

    function reUpdatePassword(req, res, next) {
        return next();
    };
    //orginal method
    function updatePassword(req, res, next) {
        return next();
    };

    function userUpdate1(req, res, next) {
        return next();
    };

    function userUpdate(req, res, next) {
        return next();
    };

    function updateUserLanguage(req, res, next) {
        return next();
    };

    function updateUserImage(req, res, next) {
        return next();
    };
}

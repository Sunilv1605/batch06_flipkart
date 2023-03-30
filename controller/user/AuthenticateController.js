const Joi = require("joi");

class AuthenticateController {

    constructor() { }

    login() {

    }

    register() {

    }

    signupPage(req, res) {
        try {
            let page = {
                title: "Registraton",
                pageName: "register",
                status: "",
                message: "",
            }
            console.log("req.session", req.session);
            if (req.session.status && req.session.message) {
                page.status = req.session.status;
                page.message = req.session.message;
                delete req.session.status, req.session.message;
            }
            console.log("page", page);
            res.render('user/template', page);
        } catch (error) {
            console.log("signupPage Page", error);
        }
    }

    createUser(req, res) {
        try {
            console.log("req.body", req.body);
            const schema = Joi.object({
                fname: Joi.string().required(),
                lname: Joi.string().required(),
                email: Joi.string().email().required(),
                contact: Joi.number().required(),
                city: Joi.string().required(),
                address: Joi.string().required(),
                contact: Joi.number().required(),
                pincode: Joi.number().required(),
                password: Joi.string().required(),
                landMark: Joi.string().required(),
                confirmPassword: Joi.string(),
            });
            const valResponse = schema.validate(req.body);
            console.log("valResponse", valResponse);
            if (valResponse && valResponse.error && valResponse.error.details && valResponse.error.details) {
                req.session.status = "Error";
                req.session.message = valResponse.error.details[0].message;
                res.redirect("/signup");
            }

        } catch (error) {
            console.log("signupPage Page", error);
        }
    }

}
module.exports = new AuthenticateController();
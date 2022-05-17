const User = require("../models/user");
const jwt = require("jsonwebtoken");
const userController = {};
const bcryptjs = require("bcryptjs");

const InternalServerError = require("../errors/internal-server-error");
const BadRequestError = require("../errors/bad-request-error");

userController.register = async (req, res, next) => {

    const {
        userName,
        password,
        userType
    } = req.body;

    try {
        let user = await User.findOne({
            userName
        })

        if (user) {
            next(new BadRequestError("Username already present"));
            return;
        }

        user = new User({
            userName,
            password,
            userType
        })

        const salt = await bcryptjs.genSalt(10);

        user.password = await bcryptjs.hash(password, salt);

        await user.save();

        const tokenData = {
            id: user.id
        };

        const token = jwt.sign(tokenData, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });

        return res.json({
            ok: true,
            message: "Registraion Successful",
            packet: {
                token
            }
        });

    } catch (error) {
        console.log(error)
        next(new InternalServerError("Server not reachable"));
    }
}


userController.login = async (req, res, next) => {

    const {
        userName,
        password
    } = req.body;

    try {
        let user = await User.findOne({
            userName
        })

        if (!user) {
            next(new BadRequestError("Invalid Credentials"));
            return;
        }

        const passwordMatch = await bcryptjs.compare(password, user.password)

        if (!passwordMatch) {
            next(new BadRequestError("Invalid Credentials"));
            return;
        }

        const tokenData = {
            id: user.id
        };

        const token = jwt.sign(tokenData, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });

        return res.json({
            ok: true,
            message: "Login Successful",
            packet: {
                token
            }
        });

    } catch (error) {
        console.log(error)
        next(new InternalServerError("Server not reachable"));
    }

}
module.exports = userController;
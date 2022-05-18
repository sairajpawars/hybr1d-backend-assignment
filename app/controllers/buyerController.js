const User = require("../models/user");
const Catalog = require("../models/catalog");
const Product = require("../models/product");
const Order = require("../models/order");
const jwt = require("jsonwebtoken");
const buyerController = {};
const bcryptjs = require("bcryptjs");

const InternalServerError = require("../errors/internal-server-error");
const BadRequestError = require("../errors/bad-request-error");
const InvalidCredentialError = require("../errors/invalid-cred-error");

buyerController.listOfSellers = async (req, res, next) => {

    try {
        const sellerList = await User.find({
            userType: "seller"
        }, "-__v -createdAt -userType -updatedAt -password")
        return res.json({
            ok: true,
            message: "List of Sellers",
            packet: {
                sellerList
            }
        });
    } catch (error) {
        console.log(error.message)
        next(new InternalServerError("Server not reachable"));
    }
}

buyerController.sellerCatalog = async (req, res, next) => {
    const sellerId = req.params.seller_id
    try {
        const sellerCatalog = await Catalog.find({
            userId: sellerId
        }, "-__v ").populate('products')
        return res.json({
            ok: true,
            message: "Seller Catalog",
            packet: {
                sellerCatalog
            }
        });
    } catch (error) {
        console.log(error.message)
        next(new InternalServerError("Server not reachable"));
    }
}
module.exports = buyerController;
const User = require("../models/user");
const Catalog = require("../models/catalog");
const Product = require("../models/product");
const Order = require("../models/order");
const jwt = require("jsonwebtoken");
const sellerController = {};
const bcryptjs = require("bcryptjs");

const InternalServerError = require("../errors/internal-server-error");
const BadRequestError = require("../errors/bad-request-error");
const InvalidCredentialError = require("../errors/invalid-cred-error");

sellerController.createCatalog = async (req, res, next) => {
    let {
        productList
    } = req.body;
    const user = req.user;
    try {
        const oldCatalog = await Catalog.findOne({
            userId: user
        })

        if (oldCatalog) {
            next(new BadRequestError("Catalog Already Present"));
            return;
        }

        productList.forEach(product => {
            product.userid = user.id;
        });

        const catalogProductList = await Product.insertMany(productList, {
            ordered: false
        })

        let newCatalog = new Catalog({
            userId: user,
            products: catalogProductList
        })

        await newCatalog.save();

        return res.json({
            ok: true,
            message: "Catalog Added",
            packet: {
                productList
            }
        })
    } catch (error) {
        console.log(error.message)
        next(new InternalServerError("Server not reachable"));
    }

}
module.exports = sellerController;
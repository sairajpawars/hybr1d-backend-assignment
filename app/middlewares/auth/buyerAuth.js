const jwt = require("jsonwebtoken");
const User = require("../../models/user");
const NotAuthorizedError = require("../../errors/not-authorized-error");
const InternalServerError = require("../../errors/internal-server-error");


exports.buyerAuth = async (req, res, next) => {

	const token = req.header('x-auth-token');

	if (!token) {
		next(new NotAuthorizedError("Session Expired"));
		return;
	}
	try {
		let decode = jwt.verify(token, process.env.JWT_SECRET);
		let user = await User.findById(
			decode.id,
			"-__v -createdAt -updatedAt -password"
		);

		if(user.userType != 'buyer'){
			next(new NotAuthorizedError("Not Authorized"));
			return;
		}

		req.user = user;
		next();
	} catch (error) {
		console.log(error)
		next(new InternalServerError("Server Error"));
		return;
	}
};
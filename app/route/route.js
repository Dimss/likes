const likesController = require('../controller/likesController');
const middleware = require('../common/middlewares');

module.exports = function (router) {
	// Users routes and middleware
	router.route('/v1/likes/:imageId').post(middleware.authMiddleware, likesController.addLike);
	router.route('/v1/likes/:imageId').get(middleware.authMiddleware, likesController.getLikes);

};
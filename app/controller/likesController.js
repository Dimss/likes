const appError = require("../common/appErrors").appError;
const log = require("../common/logger").logger;
const Likes = require("../model/likes");
const MongoClient = require("mongodb").MongoClient;

exports.addLike = function(req, res, next) {
  log.info(req.body);
  let imageId = req.params.imageId;
  let likes = new Likes({
    imageId: imageId
  });

  likes.save(function(err) {
    if (err) {
      log.error(err);
      next(appError("Unabel to add like for image", 400));
    }
    res.payload = "New like created successfully";
    next();
  });
};

exports.getLikes = function(req, res, next) {
  Likes.find({ imageId: req.params.imageId }, (err, docs) => {
    if (err) {
      next(appError("Unabel create new link", 400));
    } else {
      res.payload = docs.length;
      next();
    }
  });
};

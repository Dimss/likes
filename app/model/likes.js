var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var LikesSchema = new Schema({
  imageId: { type: String, required: true }
});

module.exports = mongoose.model("Likes", LikesSchema);

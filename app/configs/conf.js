const devConf = {
    db: "mongodb://localhost:27017/likes",
    listenPort: 3001,
    jwtSecret: 'secret',

};

const prodConf = {
    db: `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@mongo-likes:27017/${process.env.MONGODB_DATABASE}`,
    listenPort: 8080,
    jwtSecret: 'secret',
};
exports.conf = devConf;
if (process.env.PROFILE && process.env.PROFILE === "PROD") exports.conf = prodConf;
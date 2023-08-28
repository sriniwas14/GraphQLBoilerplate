export default {
    JWT_SECRET: process.env.JWT_SECRET || 'testSecret',
    JWT_EXPIRATION: process.env.JWT_EXPIRATION || "8h",
    MONGODB_URL: process.env.MONGODB_URL || "mongodb://127.0.0.1/graphqldemo"
}
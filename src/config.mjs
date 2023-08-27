export default {
    JWT_SECRET: process.env.JWT_SECRET || 'testSecret',
    JWT_EXPIRATION: process.env.JWT_EXPIRATION || "8h"
}
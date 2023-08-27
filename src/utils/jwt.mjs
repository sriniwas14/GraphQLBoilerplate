import { sign, verify } from "jsonwebtoken";
import config from "../config.mjs"

export const generateToken = (payload) => {
    let token = sign(payload, config.JWT_SECRET, {
        expiresIn: config.JWT_EXPIRATION
    })

    return token
}

export const hasExpired = (token) => {
    try {
        const decodedToken = jwt.verify(token, config.JWT_SECRET);
        const currentTime = Math.floor(Date.now() / 1000);

        return decodedToken.exp < currentTime;
    } catch (error) {
        return true;
    }
}
import { sign } from "jsonwebtoken";
import config from "@/config.js"

const generateToken = (payload) => {
    let token = sign(payload, config.JWT_PRIVATE_KEY,)
}
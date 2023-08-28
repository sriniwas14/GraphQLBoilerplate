import jwt from 'jsonwebtoken';
import config from "../config.mjs"

const authPlugin = {
    requestDidStart: (all) => {
        // return
        const token = req.header('Authorization');

        if (!token) {
            return res.status(401).json({ message: 'No token provided' });
        }

        jwt.verify(token, config.JWT_SECRET, (error, decoded) => {
            if (error) {
                return res.status(401).json({ message: 'Invalid or Expired token' });
            }

            req.user = decoded;
        });
    }
};

export default authPlugin;

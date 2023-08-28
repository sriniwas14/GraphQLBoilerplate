import jwt from 'jsonwebtoken';
import config from "../config.mjs"

const authPlugin = {
    requestDidStart: ({ contextValue }) => {
        // return
        // if (!token) {
        //     // console.log("No Token Provided!")
        // }

        // jwt.verify(token, config.JWT_SECRET, (error, decoded) => {
        //     if (error) {
        //         return res.status(401).json({ message: 'Invalid or Expired token' });
        //     }

        //     req.user = decoded;
        // });
    }
};

export default authPlugin;

import User from "../models/User.mjs"
import bcrypt from "bcrypt"
import { generateToken } from "../utils/jwt.mjs";

const saltRounds = 10; // Number of salt rounds to generate

export default {
    signIn: async (parent, args) => {
        const { email, password } = args

        try {
            let user = await User.findOne({ email: email })
            let passwordMatched = bcrypt.compareSync(password, user.password)

            if (passwordMatched !== password)
                return {
                    success: true,
                    token: generateToken({ email: user.email, name: user.name })
                }
            else
                return {
                    success: false,
                    message: "Wrong Email or Password!"
                }
        } catch (error) {
            console.log("Error Logging In user", error)
            return {
                success: false,
                message: "Something went wrong!"
            }
        }
    },
    signUp: async (parent, args) => {
        const { email, password, name } = args

        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)

        try {
            // Check if the user already exists
            let user = await User.find({ email: email })

            if (user.length > 0)
                return {
                    success: false,
                    message: "User already exists!"
                }


            let newUser = new User({ email, password: hash, name })
            await newUser.save()

            return {
                success: true
            }
        } catch (error) {
            console.log("Error creating user", error)
            return {
                success: false,
                message: "Something went wrong!"
            }
        }

    }
}
import User from "../models/User.js"

export default {
    signIn: (parent, args) => {
        console.log("ARGS ", args)
    },
    signUp: async (parent, args) => {
        const { email, password, name } = args

        try {
            // Check if the user already exists
            let user = await User.find({ email: email })

            if (user.length > 0)
                return {
                    success: false,
                    message: "User already exists!"
                }

            let newUser = new User({ email, password, name })
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
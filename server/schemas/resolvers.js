const User = require('../models/User');
const { signToken } = require('../utils/auth');
const resolvers = {
    Query:{
        me: async (parent, args, context) => {
            if ( context.user ) {
                // if user exists get user info based on args
                const existingUser = await User.findOne({ _id: context.user._id })
                return existingUser
            }
            throw new Error("Not logged in")
        }
    },
    Mutation:{
        login: async (parent, { email, password }) => {
            // find user by unique email
            const existingUser = await User.findOne({ email })
            if ( !existingUser ) {
                throw new Error("Invalid email")
            }
            const correctPassword = await existingUser.isCorrectPassword(password)
            if ( !correctPassword ) {
                throw new Error("Incorrect password")
            }
            const token = signToken(existingUser);
            // made sure user exists, password is correct, assaign token to user allowing login, then return new token with user information
            return{ token, user: existingUser }
        },
        addUser: async (parent, args) => {
            console.log(args)
            const newUser = await User.create(args)
            const token = signToken(newUser);
            return { token, user: newUser}
        },
        saveBook: async (parents, args, context) => {
            const data = {
                authors: args.authors,
                description: args.description,
                bookId: args.bookId,
                image: args.image,
                link: args.link,
                title: args.title
            }
            if (context.user) {
                const existingUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $push: { saveBook: data }},
                    { new: true }
                )
                return existingUser;
            } throw new Error("Not logged in");
        },
        removeBook: async (parents, { bookId }, context) => {
            if (context.user) {
                const existingUser = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $pull: { saveBook: { bookId }}},
                    { new: true }
                )
                 return existingUser;
            } throw new Error("Not logged in");
        }
    }
}
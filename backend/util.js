import jwt from "jsonwebtoken";

export const generateToken = (user) => {
    jwt.sign({
        _id: user._id,
        email: user.email,
        name: user.name,
        isAdmin: user.isAdmin
    },
    process.env.JWT_SECRET || 'somethingsecret',
    {expiresIn: "60d"})
};
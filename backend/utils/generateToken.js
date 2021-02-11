// Generate token
import jwt from 'jsonwebtoken'

// user id in token
const generateToken = (id) => {
    return jwt.sign({ id },
                    process.env.JWT_SECRET,
                    { expiresIn: '30d' })
}

export default generateToken
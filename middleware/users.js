const jwt = require("jsonwebtoken")

const departments =  ["IT", "HR"]

function restrict(department) {
    return async (req, res, next) => {

        const authError = {
            message: "You Shall Not Pass"
        }
        try {
            const token = req.headers.authorization
            if (!token) {
                return res.status(401).json(authError)
            }

            jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
                if (err) {
                    return res.status(401).json(authError)
                }

                // this is to look a specific department
                if (department && departments.indexOf(decoded.userDepartment) < departments.indexOf(department)) {
					return res.status(401).json({
						message: "Wrong Department",
					})
				}

                req.token = decoded

                next()
            })
        } catch(err) {
            next(err)
        }
    }
}

module.exports = {
	restrict,
}
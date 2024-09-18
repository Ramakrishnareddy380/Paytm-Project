const express = require('express')
const zod = require("zod")
const { User, Account } = require('../db')
const jwt = require("jsonwebtoken")
const { JWt_SECRET } = require('../config')
const { authMiddleware } = require('../middleware')
const router = express.Router()
// const {User} = require("../db")

const signUpSchema = zod.object({
    first_name: zod.string(),
    last_name: zod.string(),
    user_email: zod.string().email(),
    password: zod.string()
})

router.post("/signup", async (req, res) => {
    const body = req.body
    const {success} = signUpSchema.safeParse(req.body)
    console.log(body)

    if (!success){
        return res.json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const exisitedUser = await User.findOne({
        user_email: body.user_email
    })

    if (exisitedUser){
        return res.status(411).json({
            message : "Email already taken/Incorrect inputs"
        })
    }

    const user = await User.create({
        first_name: body.first_name,
        last_name: body.last_name,
        user_email: body.user_email,
        password: body.password
    })

    const UserId = user._id 

    await Account.create({
        UserId,
        balance: 1 + Math.random() * 10000
    })

    const token = jwt.sign({
        UserId
    }, JWt_SECRET)

    res.json({
        message: "User Created Successfully",
        token: token
    })

    console.log("hi here")

})

const signinBody = zod.object({
    user_email: zod.string().email(),
    password: zod.string()
})

router.post("/signin", async (req, res) => {
    const body = req.body
    const {success} = signinBody.safeParse(body)

    if (!success){
        return res.status(411).json({
            message: "Incorrect Inputs"
        })
    }

    const user = await User.findOne({
        user_email: body.user_email,
        password: body.password
    })

    if (user){
        const token = jwt.sign({
            UserId: user._id
        }, JWt_SECRET)

        return res.json({
            token: token
        }) 
    }

    return res.json({
        message: "Error While logging in"
    })

})

const updateBody = zod.object({
    password: zod.string().optional(),
    first_name: zod.string().optional(),
    last_name: zod.string().optional(),
})

router.put("/", authMiddleware, async (req, res) => {
    const body = req.body

    const {success} = updateBody.safeParse(body)
    console.log("working")

    if (!success){
        res.status(411).json({
            message: "Error while updating information"
        })
    }

    await User.updateOne({_id: req.UserId}, req.body)

    res.json({
        message: "Updated successfully"
    })
})


// router.get("/bulk", authMiddleware, async (req, res) => {
//     const filter = req.query.filter

//     const users = await User.find({
//         $or: [
//             {
//                 "first_name":{$regex: `${filter}`}
//             }, 
//             {
//                 "last_name": {$regex: `${filter}`}
//             }
//         ]
//     })

//     res.json({
//         user: users.map(user => ({
//             user_email: user.user_email,
//             first_name: user.first_name,
//             last_name: user.last_name,
//             _id: user._id
//         }))
//     })
// })

router.get("/bulk", authMiddleware, async (req, res) => {
    const filter = req.query.filter || ''; // Default to empty string if no filter is provided

    try {
        // Fetch users based on filter
        const users = filter ? await User.find({
            $or: [
                { first_name: { $regex: filter, $options: 'i' } }, // Case-insensitive regex search
                { last_name: { $regex: filter, $options: 'i' } }
            ]
        }): await User.find({});

        // Map and send the filtered users
        res.json({
            users: users.map(user => ({
                user_email: user.user_email,
                first_name: user.first_name,
                last_name: user.last_name,
                _id: user._id
            }))
        });
    } catch (error) {
        // Handle errors
        res.status(500).json({ message: "An error occurred", error });
    }
});



module.exports = router
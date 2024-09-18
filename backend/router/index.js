const express = require('express')
const UserRouter = require("./user")
const accountRounter = require("./account")

const router = express.Router()

router.use("/user", UserRouter)
router.use("/account", accountRounter)


module.exports = router


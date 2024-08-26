const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require("express-validator")
const bcrypt=require("bcryptjs")
const jwt = require('jsonwebtoken')
const jwtsecret = "helloramthisisprasadyourfriend"



router.post("/createuser", [
    body('email').isEmail(),
    body('password', 'invalid password').isLength({ min: 5 })
],
    async (req, res) => {

        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const salt = await bcrypt.genSalt(10);
        let securepassword = await bcrypt.hash(req.body.password,salt)

        try {
            await User.create({
                name: req.body.name,
                password: securepassword,
                email: req.body.email,
                geolocation: req.body.geolocation
            })
            res.json({ sucess: true })
        } catch (error) {
            console.log(error)
            res.json({ sucess: false })
        }
    })

router.post("/loginuser",
    body('email').isEmail(),
    body('password', 'invalid password').isLength({ min: 5 })
    , async (req, res) => {

        let email = req.body.email

        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        try {
            let userdata = await User.findOne({ email });
            if (!userdata) {
                return res.status(400).json({ error: "wrong credanitials" })
            }
            
            const passwordcompare = await bcrypt.compare(req.body.password,userdata.password)

            if (!passwordcompare) {
                return res.status(400).json({ error: "wrong credanitials" })
            }

            const data={
                user:{
                    id:userdata.id
                }
            }

            const authtoken = jwt.sign(data,jwtsecret)

            return res.json({ success: true,authtoken:authtoken })
        } catch (error) {
            console.log(error)
            res.json({ sucess: false })
        }
    })

module.exports = router
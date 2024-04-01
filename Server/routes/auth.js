const express = require('express');
const User = require('../models/User');
const { query, validationResult, body } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');
const router = express.Router();
const dotenv = require("dotenv")


dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;
// ROUTE: 1 create a user using : post '/api/auth/createuser'. No login required

router.post('/createuser', [
    body('name', 'Enter a valid name'),
    body('email', 'Enter a valid email'),
    body('password', 'password must be atleast 8 characters'),
], async (req, res) => {
    let = success = false;
    // if ther are errors, return Bad request and the errors

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({success, errors: errors.array() });
    }

    // check the whether the user with this email exists already

    try {
        const { name, email, password } = req.body;
        const nameCheck = await User.findOne({ name });
        if (nameCheck) {
            return res.json({ message: "name already taken", status: false });
        }

        const emailCheck = await User.findOne({ email });
        if (emailCheck) {
            return res.json({ message: "Email already taken", status: false });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name: name,
            email: email,
            password: hashedPassword,
        })
        delete user.password
        return res.json({ status: true, user })
    } catch (error) {
        console.error(error.massage);
        res.status(500).send("Internal Server Error")
    }
})


// ROUTE : 2  Authenticate a user using : post '/api/auth/login'. No login required

router.post('/login', [
], async (req, res) => {
    
        try {
            const { email, password } = req.body;
    let user;

    // Check if the email field contains a valid email format
    let isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

    if (isValidEmail) {
        // If the email field contains a valid email format, search for the user by email
        user = await User.findOne({ email: email });
    } else {
        // If the email field doesn't contain a valid email format, assume it's a name
        user = await User.findOne({ name: email });
    }

    if (!user) {
        return res.status(400).json({ success: false, error: "Please try to login with correct credentials" });
    }

        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({success, error: "please try to login with correct credentials" });
        }

        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        const success = true
        res.json({ success, authtoken })

    } catch (error) {
        console.error(error.massage);
        res.status(500).send("Internal Server Error")
    }
})

// ROUTE : 3 Get loggedin user Details using  post '/api/auth/getuser'. login required 
router.post('/getuser', fetchuser , async (req, res) => {

try {
    userId= req.user.id;
const user =  await User.findById(userId).select("password")
res.send(user)
} catch (error) {
    console.error(error.massage);
    res.status(500).send("Internal Server Error")
}
})
module.exports = router
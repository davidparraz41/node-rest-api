const express = require('express')
const app = express()
const port = 3000;

const userService = require('./services/UserService')
const jwt = require('./auth/jwt')
app.use(express.json())


app.post('/auth/', async (
    req,
    res) => {
    const loginDate = req.body;
    try {
        const userFound = await userService.findByName(loginDate.email);
        if (userFound && userFound.password === loginDate.password) {
            const token = await jwt.generateToken();
            res.json({
                token: token
            })
        } else {
            res.status(401);
            res.send();
        }
    } catch (err) {
        console.log(err.stack)
        res.status(500);
        res.send("Internal Server Error");
    }
});



const protectedPaths = express.Router();
protectedPaths.use(async (req,
                          res,
                          next) => {
    const token = req.headers['access-token'];
    if (token) {
        try {
            req.decoded = await jwt.verify(token);
            next();
        } catch (err) {
            res.status(401);
            res.send();
        }

    } else {
        res.status(401);
        res.send({
            mensaje: 'Token no preveido.'
        });
    }
});

app.get('/users', protectedPaths, async (req, res) => {
    res.json(await userService.findAll());
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});




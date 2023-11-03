"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/login', (req, res) => {
    res.send(`
        <span> <a href="/">Home</a> </span>
        <form method = "POST"> 
            <div>
                <label class="lab">Email</label>
                <input type="text" name="email" />
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password" />
            </div>
            <button> Submit </button>
        </form>
    `);
});
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    res.send(`<p> Email - ${email}; PAssword - ${password} </p>`);
});

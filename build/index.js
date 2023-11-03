"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const loginRouters_1 = require("./routes/loginRouters");
const app = (0, express_1.default)();
app.use(express_1.default.static('public'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});
app.use(express_1.default.urlencoded({ extended: true }));
app.use(loginRouters_1.router);
app.listen(3000, () => {
    console.log(`Listening 3000`);
});

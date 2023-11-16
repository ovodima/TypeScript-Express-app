"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
function createRoutes(app) {
    app.set('views', path_1.default.join(__dirname, '../views'));
    app.set('view engine', 'ejs');
    app.get('/', (req, res) => {
        res.render('home', { title: "Home page" });
    });
    app.get('/about', (req, res) => {
        res.render('about', { title: "about page" });
    });
}
exports.default = createRoutes;

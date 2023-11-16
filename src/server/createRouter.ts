import { Application, Request, Response } from "express";
import path from "path";


export default function createRoutes(app: Application): void {
    app.set('views', path.join(__dirname, '../views'))
    app.set('view engine', 'ejs')
    app.get('/', (req: Request, res: Response) => {
        res.render('home', {title: "Home page"})
    })
    app.get('/about', (req: Request, res: Response) => {
        res.render('about', {title: "about page"})
    })
}


import express, {Request, Response, } from 'express'
import { router } from './routes/loginRouters'

const app = express()

app.use(express.static('public'))

app.get('/', (req: Request, res: Response) => {
    
    res.sendFile(__dirname + '/public/index.html')
})



app.use(express.urlencoded({extended: true}))
app.use(router)

app.listen(3000, () => {
    console.log(`Listening 3000`)
})
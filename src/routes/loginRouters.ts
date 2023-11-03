import { Router, Request, Response} from "express";

const router:Router = Router()

router.get('/login', (req: Request, res: Response) => {
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
    `)
})

router.post('/login', (req: Request, res: Response) => {
    const {email, password} = req.body

    res.send(`<p> Email - ${email}; PAssword - ${password} </p>`)
})



export {router}
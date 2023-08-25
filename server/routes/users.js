import  express  from "express";

const router = express.Router()

router.get('/', (req, res)=>{
    res.send("Hello Auth request")
})


export default router;
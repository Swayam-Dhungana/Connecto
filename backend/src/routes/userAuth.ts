import { Hono } from "hono";

const userAuth=new Hono();

userAuth.get('/signup',async (c)=>{
    console.log('working')
    return c.json({success: true})
})


export default userAuth
import Express from "express";
import { pool } from "./db.js";
import { PORT } from "./config.js";


const app = Express();

app.get ('/',async(req,res)=>{
    
    const [rows]=await  pool.query('SELECT * FROM users')
    res.json(rows)


})

app.get ('/ping', async(req,res)=>{
const [result]= await pool.query(`Select "hello world" as RESULT`)

console.log(result[0]);
res.json(result[0])
})



app.get('/create',async(req,res)=>{
   const result= await pool.query(`INSERT into users(name) VALUES("Jonh")`)

   res.json(result)
})
 


app.listen(PORT),


console.log(`server listening on port ${PORT}`);
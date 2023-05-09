import  {createPool} from 'mysql2/promise'
import { db_host,db_name,db_pass,db_port,db_user } from "./config.js";

export const pool=  createPool({
    user: db_user,
    password:db_pass ,
    host: db_host,
    port: db_port,
    database: db_name 

})


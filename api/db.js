import mysql from "mysql"

export const db = mysql.createConnection({
    host: 'localhost',
    port: 33066,
    user: 'root',
    password: 'root',
    database: 'blogweb'
})
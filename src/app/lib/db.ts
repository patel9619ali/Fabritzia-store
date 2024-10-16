import mysql from 'mysql2/promise';



let connection:any;

export const  createConnection = async () => {
    if(!connection){
        connection = await mysql.createConnection({
            uri: process.env.DATABASE_URL,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0,
        })
    }
    return connection;
}
import express from 'express'
import dotenv from 'dotenv'
import mysql from 'mysql'
import entryRoutes from './routes/entries.js'
import cors from 'cors'

dotenv.config();
const app = express()
app.use(express.json())

// To allow Vite Local host to get the request
const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(cors(corsOptions))

console.log(process.env.DB_HOST,process.env.DB_USER,process.env.DB_PASSWORD,process.env.DB_NAME);

// Make Connection to the databse
export const con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Connect to Database
con.connect((err) => {
    if (err)
        return console.log("Error in connection: ",err);
    console.log("Connected to database")
})

// Routes to be handled
app.use("/api/v1",entryRoutes)

app.listen(3000, () => {
    console.log('Server is running at port 3000')
})
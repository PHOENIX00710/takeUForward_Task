import express from 'express'
import dotenv from 'dotenv'
import mysql from 'mysql'
import entryRoutes from './routes/entries.js'
import cors from 'cors'

dotenv.config();
const app = express()
app.use(express.json())

// To allow Vite Local host and deployed frontend to get access
const allowedOrigins = ['http://localhost:5173', 'https://amazing-sunflower-c4f1dc.netlify.app','https://tuffrontend.onrender.com'];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 204.
};

app.use(cors(corsOptions));

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
    console.log('Server is running')
})

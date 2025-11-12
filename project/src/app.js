import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
const app = express()
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json({ limit: "16kb" }))
// this extented mean obj in obj
app.use(express.urlencoded({
    extended: true,
    limit: '16kb'
}))
// to store assest on your local server in public folder 
app.use(express.static('public'))
// to perfome crud opetaion in user brower cookies 
app.use(express.cookieParser())

export default app;

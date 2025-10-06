import express from 'express'
import cors from 'cors'
const app = express()
const port = process.env.PORT || 3000
//  if we use cors pkg
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))
// to add static frontend file to backend for deployment
app.use(express.static("dist"))
// app.get('/', (req, res) => {
//     res.send('the app is running')
// })
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'joke 1',
            content: 'this is a joke 1'
        }
        , {
            id: 2,
            title: 'joke 2',
            content: 'this is a joke 2'
        }
        ,
        {
            id: 3,
            title: 'joke 3',
            content: 'this is a joke 3'
        }
        ,
        {
            id: 4,
            title: 'joke 4',
            content: 'this is a joke 4'
        }
    ]
    res.send(jokes)
})
app.listen(port, (req, res) => {
    console.log(`Example app listening on port http://localhost:${port}/`)
})

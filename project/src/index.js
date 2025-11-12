import dotenv from 'dotenv';
import app from './app.js';
import ConnectDB from './db/index.js';
dotenv.config();
const port = process.env.PORT || 8000

ConnectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`server is running at port ${port}`)
        })
    })
    .catch((error) => {
        console.log('DB connection Failed', error)
    })




// db connection method no 1
//     (async () => {
//         try {
//             await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
//             console.log('Db Connected')
//             app.on('error', (error) => {
//                 console.log('Error', error)
//                 throw error
//             })
//             app.listen(process.env.PORT, () => {
//                 console.log(`App is Listening`)
//             })
//         }
//         catch (error) {
//             console.log('Connection Error:', error)
//         }
//     })()
import express from  'express';
import cors from 'cors';
import routes from './routes/route.js';
import Connection from './database/db.js';
import dotenv from 'dotenv';
dotenv.config();


const port = process.env.PORT
const app = express();

app.use(cors());
app.use(
    express.urlencoded({ extended: true })
);
    
app.use(express.json({extended:true}));


app.use('/', routes);
app.get("/", (req, res) => {
    res.send("GmailClone working");
})

Connection();
app.listen(port, () => {
    console.log(`Server connected in Localhost:${port}`);
})

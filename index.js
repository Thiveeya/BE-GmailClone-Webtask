
import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes/route.js';
import Connection from './database/db.js';
const __dirname=path.resolve();

const app = express();

app.use(cors());
app.use(express.json());
 app.use(
     express.urlencoded({ extended: true })
 );
 app.use(express.json({ extended: true }));

 app.use('/', routes);
 app.use(express.static(path.join(__dirname,"./client/bulid")));
 app.get('*',function(__,res){
     res.sendFile(path.join(__dirname,"./client/bulid/index.html"),function(err){
        res.status(500).send(err);
     })
 })
    
 

 
     

Connection();
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



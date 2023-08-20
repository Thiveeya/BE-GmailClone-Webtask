import mongoose from "mongoose";
const Connection = () => {
    const DB_URI = `mongodb+srv://rbsthivi:thiveeya@cluster0.vgypaij.mongodb.net/?retryWrites=true&w=majority`;    try {
        mongoose.connect(DB_URI, { useNewUrlParser: true });
        mongoose.set('strictQuery', false);
        console.log('Database connected sucessfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message)
    }
}

export default Connection;
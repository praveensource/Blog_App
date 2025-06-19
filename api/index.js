import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();
mongoose.connect(process.env.MONGO).then(
    ()=>{
        console.log("Mongodb is connected");
    }
).catch(err => {
    console.log(err);
});

const app = express();

app.listen(3000, () => {
    console.log("Running in host 3000!! :)");
})
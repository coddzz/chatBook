import express from "express";
import authRouter from "./routers/auth.route.js";
import dotenv from "dotenv";

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json(
    {
        limit : "10mb"  // default value 100k
    }
));

app.use('/api/auth', authRouter);

app.listen(PORT, ()=>{
    console.log(`Server running on Port: ${PORT}`)
});
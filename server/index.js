import express from "express"
import dotenv from "dotenv"
import connectDB from "./utils/connectDB.js"
import authRouter from "./routes/auth.route.js";
import cors from "cors"
import cookieParser from "cookie-parser"
import userRouter from "./routes/user.route.js"



dotenv.config()

const app = express();


app.use(cors(
    {origin:"http://localhost:5173",
        credentials:true,
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
    }
))
app.use(express.json())
app.use(cookieParser())
const PORT = process.env.PORT || 5000;

app.get("/",(req,res)=>{
    res.json({message: "examnotes AI backend running"})
})
app.use("/api/auth" , authRouter)
app.use("/api/user", userRouter)



app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
    connectDB()
});
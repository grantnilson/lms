require('dotenv').config()
import express, { NextFunction, Request, Response } from "express"
export const app = express()
import cors from "cors"
import cookieParser from "cookie-parser"

app.use(express.json({limit: "50mb"}))

app.use(cookieParser())

app.use(cors({origin: process.env.ORIGIN}))

app.get("/test", (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
        success: true, 
        message: "API working"

    })
})

app.all("*", (req: Request, res: Response, next: NextFunction) => {
    const error = new Error(`Route ${req.originalUrl} not found`) as Error
    error.message = "404"
    next(error)
})

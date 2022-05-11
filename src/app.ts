import "reflect-metadata"
import express, {Request, Response, NextFunction} from "express"
import "express-async-errors"
import routes from "./routers"
import AppError from "./errors/AppError"

const app = express()

app.use(express.json())
app.use(routes)
app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: "Error",
      message: err.message,
    })
  }

  console.error("Internal server error", err)

  return response.status(500).json({
    status: "Error",
    message: "Internal Server Error",
  })
})

app.listen(process.env.PORT || 3333, () => {
  console.log("Server running on port 3333")
})

export default app

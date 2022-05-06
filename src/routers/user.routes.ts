import Router from "express"
import UsersController from "../controllers/UserController"

const usersRoutes = Router()

usersRoutes.post("/", UsersController.store)
usersRoutes.get("/", UsersController.index)
usersRoutes.get("/:id", UsersController.show)
usersRoutes.patch("/:id", UsersController.update)
usersRoutes.delete("/:id", UsersController.delete)

export default usersRoutes

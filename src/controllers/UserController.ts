import {Request, Response} from "express"
import CreateUserService from "../services/users/CreateUserService"
import ListUsersService from "../services/users/ListUsersService"
import GetUserService from "../services/users/GetUserService"
import UpdateUserService from "../services/users/UpdateUserService"

export default class UsersController {
  static async store(request: Request, response: Response) {
    const {name, email, password, age} = request.body

    const createUser = new CreateUserService()

    const user = await createUser.execute({
      name,
      email,
      password,
      age,
    })

    return response.status(201).json(user)
  }

  static async index(request: Request, response: Response) {
    const getUsers = new ListUsersService()
    const users = await getUsers.execute()

    return response.json(users)
  }

  static async show(request: Request, response: Response) {
    const {id} = request.params

    const getUserService = new GetUserService()

    const user = await getUserService.execute({id})

    return response.json(user)
  }

  static async update(request: Request, response: Response) {
    const {id} = request.params
    const {name, email, age} = request.body

    const updateUserService = new UpdateUserService()

    const updatedUser = await updateUserService.execute({id, name, email, age})

    return response.json(updatedUser)
  }
}

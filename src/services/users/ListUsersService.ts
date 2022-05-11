import {User} from "../../entities/User"
import AppDataSource from "../../data-source"

export default class ListUsersService {
  async execute() {
    const userRepository = AppDataSource.getRepository(User)

    const users = await userRepository.find()

    return users
  }
}

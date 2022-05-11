import {User} from "../../entities/User"
import AppDataSource from "../../data-source"
import AppError from "../../errors/AppError"

interface UserDataParams {
  id: string
}

export default class DeleteUserService {
  async execute({id}: UserDataParams) {
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({
      where: {
        id,
      },
    })

    if (!user) {
      throw new AppError("User not found!", 404)
    }

    await userRepository.delete(user.id)

    return true
  }
}

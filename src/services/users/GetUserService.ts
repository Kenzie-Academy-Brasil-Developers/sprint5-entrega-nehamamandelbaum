import User from "../../entities/User"
import AppDataSource from "../../data-source"

interface UserDataParams {
  id: string
}

export default class GetUserService {
  async execute({id}: UserDataParams) {
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({
      where: {
        id,
      },
    })

    return user
  }
}

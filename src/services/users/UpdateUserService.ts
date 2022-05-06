import User from "../../models/User"

import AppDataSource from "../../data-source"
import AppError from "../../errors/AppError"

interface UserDataParams {
  id: string
  name?: string
  email?: string
  age?: number
}

export default class UpdateUserService {
  async execute({id, name, email, age}: UserDataParams) {
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({
      where: {
        id,
      },
    })

    if (!user) {
      throw new AppError("User not found!", 404)
    }

    name ? (user.name = name) : user.name
    email ? (user.email = email) : user.email
    age ? (user.age = age) : user.age
    user.updated_at = new Date()

    await userRepository.update(user.id, user)

    return user
  }
}

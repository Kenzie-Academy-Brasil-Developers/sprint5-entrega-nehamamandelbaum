import User from "../../entities/User"
import {hash} from "bcryptjs"
import AppDataSource from "../../data-source"
import AppError from "../../errors/AppError"

interface UserDataParams {
  name: string
  email: string
  password: string
  age: number
}

export default class CreateUserService {
  async execute({name, email, password, age}: UserDataParams): Promise<User> {
    const userRepository = AppDataSource.getRepository(User)

    const checkIfUserExists = await userRepository.findOne({
      where: {
        email,
      },
    })

    if (checkIfUserExists) {
      throw new AppError("Email already in use!")
    }

    const hashedPassword = await hash(password, 10)

    const user = userRepository.create({
      name,
      email,
      password: hashedPassword,
      age,
    })

    await userRepository.save(user)

    return user
  }
}

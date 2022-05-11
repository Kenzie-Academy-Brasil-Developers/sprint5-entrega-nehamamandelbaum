import {DataSource} from "typeorm"
import "dotenv/config"
import {User} from "./entities/User"

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: false,
  logging: true,
  entities: [User],
  migrations: ["src/migrations/*.ts"],
})

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!")
  })
  .catch((err) => {
    console.error("Error during data source initialization", err)
  })

export default AppDataSource

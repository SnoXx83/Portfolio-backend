import { DataSource } from "typeorm"

const AppDataSource = new DataSource({
    type: "sqlite",
    host: "localhost",
    port: 3306,
    username: "test",
    password: "test",
    database: "test",
})

export default AppDataSource;
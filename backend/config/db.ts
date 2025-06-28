import { DataSource } from "typeorm"

const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true,
    logging: true,
    entities: ["src/entities/**/*.ts"],
});

export default AppDataSource;